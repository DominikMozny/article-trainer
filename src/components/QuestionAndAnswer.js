import React from 'react';

const answers = (answer, question, onClickAnswerButton) => {
    return answer ? null : question.answers.map((answer) =>
        <div style={{display: 'inline-block'}}>
            <button onClick={() => onClickAnswerButton(question.id, answer)}>{answer}</button>
        </div>
    )
}

const getBgColor = (answer) => {
    if (answer) {
        if (answer.result) {
            return 'LimeGreen';
        } else {
            return 'OrangeRed';
        }
    }
    return 'white';
}

const QuestionAndAnswer = ({question, answer, onClickAnswerButton}) => (
    <div>
        <div className="question" style={{display: 'inline-block', backgroundColor: getBgColor(answer)}}>
            {question.question}
        </div>
        <div style={{display: 'inline-block'}}>
            {answers(answer, question, onClickAnswerButton)}
        </div>
    </div>
)

export default QuestionAndAnswer
