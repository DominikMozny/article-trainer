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
    fetch('http://localhost:8080/questions')
        .then(response => response.json())
        .then(json => {
            json.questions.map((q) => dispatch(addQuestion(q)))
        })
        .catch(e => alert(e.toString()))
}

export const sendAnswer = (questionId, answer) => dispatch => {
    fetch('http://localhost:8080/sendAnswer', {
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
            setTimeout(() => dispatch(replaceQuestion(json)), 3000)
            setTimeout(() => dispatch(removeAnswer(json)), 3000)
        })
        .catch(e => alert("Problem huston"))
}

export const deleteAllQuestions = () => dispatch => {
    fetch('http://localhost:8080/deleteAllQuestions')
        .then(response => response)
        .then(r => {
            dispatch(updateConfigStatus('All questions deleted.'))
            setTimeout(() => dispatch(updateConfigStatus('')), 3000)
        })
}
