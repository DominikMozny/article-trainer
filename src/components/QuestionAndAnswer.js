import React from 'react';

const answers = (question, onClickAnswerButton) => {
    return question.answers.map((answer) =>
        <button onClick={() => onClickAnswerButton(question.id, answer)}>{answer}</button>
    )
}

const getAnswer = (answer) => {
    if (answer) {
        return <div style={{display: 'inline-block'}}>
            {answer.result.toString()}
        </div>
    }
}

const QuestionAndAnswer = ({question, answer, onClickAnswerButton}) => (
    <div>
        <div style={{display: 'inline-block'}}>
            {question.question} {answers(question, onClickAnswerButton)}
        </div>
        <div style={{display: 'inline-block'}}>
            {getAnswer(answer)}
        </div>
    </div>
)

export default QuestionAndAnswer
