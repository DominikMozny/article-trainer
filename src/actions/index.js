import {articleQuestionsToJson} from "../logic/FileContentToJson";
import {BACKEND, WAIT_BEFORE_NEW_QUESTION_IN_MS} from "../constants/staticConfiguration";

export const addQuestionForm = (questionForm) => ({
    type: 'ADD_QUESTION_FORM',
    id: questionForm.id,
    question: questionForm.question,
    possibleAnswers: questionForm.possibleAnswers
})

export const replaceQuestionForm = (atbResToUserAnswer) => ({
    type: 'REPLACE_QUESTION_FORM',
    previousId: atbResToUserAnswer.questionId,
    nextQuestion: atbResToUserAnswer.nextQuestion
})

export const addRightAnswer = (atbResToUserAnswer) => ({
    type: 'ADD_RIGHT_ANSWER',
    questionId: atbResToUserAnswer.questionId,
    userAnswerResult: atbResToUserAnswer.userAnswerResult,
    statisticsAnswers: atbResToUserAnswer.statisticsAnswers,
    nextQuestion: atbResToUserAnswer.nextQuestion
})

export const removeRightAnswer = (atbResToUserAnswer) => ({
    type: 'REMOVE_RIGHT_ANSWER',
    questionId: atbResToUserAnswer.questionId
})

export const updateConfigStatus = (status) => ({
    type: 'UPDATE_CONFIG_STATUS',
    status: status
})

export const fetchquestions = () => dispatch => {
    fetch(BACKEND + 'questions')
        .then(response => response.json())
        .then(json => {
            json.questions.map((q) => dispatch(addQuestionForm(q)))
        })
        .catch(e => alert(e.toString()))
}

export const sendUserAnswer = (questionId, answer) => dispatch => {
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
            dispatch(addRightAnswer(json))
            setTimeout(() => dispatch(replaceQuestionForm(json)), WAIT_BEFORE_NEW_QUESTION_IN_MS)
            setTimeout(() => dispatch(removeRightAnswer(json)), WAIT_BEFORE_NEW_QUESTION_IN_MS)
        })
        .catch(e => alert("Problem huston"))
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
