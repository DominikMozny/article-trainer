export const showMessage = (message) => ({
    type: 'DISPLAY_MESSAGE',
    message
})

export const refreshWord = (jsonWord) => ({
    type: 'REFRESH_WORD',
    jsonWord
})

export const addQuestionToBeAnswered = (questionToBeAnswered) => ({
    type: 'ADD_QUESTION_TO_BE_ANSWERED',
    id: questionToBeAnswered.id,
    question: questionToBeAnswered.question,
    answers: questionToBeAnswered.answers
})

export const addAnsweredQuestion = (answeredQuestion) => ({
    type: 'ADD_ANSWERED_QUESTION',
    id: answeredQuestion.id,
    answer: answeredQuestion.answer
})


export const fetchMessage = () => dispatch => {
    dispatch(showMessage('Loading'))
    fetch('http://localhost:8080/getWord')
        .then(response => response.json())
        .then(json => {
            dispatch(showMessage(JSON.stringify(json)))
            dispatch(refreshWord(json))
        })
        .catch(e => dispatch(showMessage(e.toString())))
}

export const sendAnswer = (word) => dispatch => {
    fetch('http://localhost:8080/postAnswer', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            word: word,
            answer: 'myAnswer',
        })
    })
        .then(response => response.json())
        .then(json => {
            alert(json.word)
        })
        .catch(e => alert("problem huston"))
}
