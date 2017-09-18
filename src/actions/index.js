export const addQuestion = (question) => ({
    type: 'ADD_QUESTION',
    id: question.id,
    question: question.question,
    answers: question.answers
})

export const addAnswer = (answeredQuestion) => ({
    type: 'ADD_ANSWER',
    id: answeredQuestion.id,
    answer: answeredQuestion.answer
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
            alert(json.result)
        })
        .catch(e => alert("problem huston"))
}
