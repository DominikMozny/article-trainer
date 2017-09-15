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

export const fetchQuestionsToBeAnswered = () => dispatch => {
    fetch('http://localhost:8080/questions')
        .then(response => response.json())
        .then(json => {
            json.questions.map((q) => dispatch(addQuestionToBeAnswered(q)))
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
            alert(json.result)
        })
        .catch(e => alert("problem huston"))
}
