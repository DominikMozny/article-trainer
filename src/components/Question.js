import React from 'react';

const answers = (question, onClickAnswerButton) => {
    return question.answers.map((answer) =>
        <button onClick={() => onClickAnswerButton(question.id, answer)}>{answer}</button>
    )
}

const Question = ({question, onClickAnswerButton}) => (
    <div style={{display: 'inline-block'}}>
        {question.question} {answers(question, onClickAnswerButton)}
    </div>
)

export default Question
