import React from 'react';

const answers = (questionToBeAnswered, onClickAnswerButton) => {
    return questionToBeAnswered.answers.map((answer) =>
        <button onClick={() => onClickAnswerButton(questionToBeAnswered.id, answer)}>{answer}</button>
    )
}

const QuestionToBeAnswered = ({questionToBeAnswered, onClickAnswerButton}) => (
    <div>
        {questionToBeAnswered.question} {answers(questionToBeAnswered, onClickAnswerButton)}
    </div>
)

export default QuestionToBeAnswered
