import {articleQuestionsToJson} from "../logic/FileContentToJson";
import {
    BACKEND,
    DURATION_NOTIFICATION_WILL_BE_DISPLAYED,
    WAIT_BEFORE_NEW_QUESTION_IN_MS
} from "../logic/staticConfiguration";

export const addQuestion = (question) => ({
    type: 'ADD_QUESTION',
    id: question.id,
    question: question.question,
    answers: question.answers
})

export const replaceQuestion = (answer) => ({
    type: 'REPLACE_QUESTION',
    previousId: answer.questionId,
    nextQuestion: answer.nextQuestion
})

export const addAnswer = (answer) => ({
    type: 'ADD_ANSWER',
    questionId: answer.questionId,
    result: answer.result,
    nextQuestion: answer.nextQuestion
})

export const removeAnswer = (answer) => ({
    type: 'REMOVE_ANSWER',
    questionId: answer.questionId
})

export const updateConfigStatus = (status) => ({
    type: 'UPDATE_CONFIG_STATUS',
    status: status
})

export const fetchquestions = () => dispatch => {
    fetch(BACKEND + 'questions')
        .then(response => response.json())
        .then(json => {
            json.questions.map((q) => dispatch(addQuestion(q)))
        })
        .catch(e => alert(e.toString()))
}

export const sendAnswer = (questionId, answer) => dispatch => {
    fetch(BACKEND + 'sendAnswer', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            questionId: questionId,
            answer: answer,
        })
    })
        .then(response => response.json())
        .then(json => {
            dispatch(addAnswer(json))
            setTimeout(() => dispatch(replaceQuestion(json)), WAIT_BEFORE_NEW_QUESTION_IN_MS)
            setTimeout(() => dispatch(removeAnswer(json)), WAIT_BEFORE_NEW_QUESTION_IN_MS)
        })
        .catch(e => alert("Problem huston"))
}

export const deleteAllQuestions = () => dispatch => {
    fetch(BACKEND + 'deleteAllQuestions')
        .then(response => response)
        .then(r => {
            dispatch(updateConfigStatus('All questions deleted.'))
            setTimeout(() => dispatch(updateConfigStatus('')), DURATION_NOTIFICATION_WILL_BE_DISPLAYED)
        })
}

export const addAllQuestions = (event) => dispatch => {
    const reader = new FileReader()
    reader.onload = (e) => {
        const fileContentAsJson = articleQuestionsToJson(e.target.result);
        fetch(BACKEND + 'initFrQuestions', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: fileContentAsJson
        })
            .then(response => response.json())
            .then(json => alert(JSON.stringify(json)))
            .catch(e => alert("Problem huston: " + e.toString()))
    }
    reader.readAsText(event.target.files[0])
}
