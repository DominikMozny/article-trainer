import React from 'react';

const answers = (answer, question, onClickAnswerButton) => {
    return answer ? null : question.answers.map((answer) =>
        <div style={{display: 'inline-block'}}>
            <button className="answerButton"
                    onClick={() => onClickAnswerButton(question.id, answer)}>{answer}</button>
        </div>
    )
}

const getBgColor = (answer) => {
    if (answer) {
        if (answer.result) {
            return 'LightGreen';
        } else {
            return 'LightPink';
        }
    }
    return 'AliceBlue';
}

const QuestionAndAnswer = ({question, answer, onClickAnswerButton}) => (
    <div className="questionOuter" style={{backgroundColor: getBgColor(answer)}}>
        <div className="questionInner" style={{display: 'inline-block'}}>
            {question.question}
        </div>
        <div style={{display: 'inline-block'}}>
            {answers(answer, question, onClickAnswerButton)}
        </div>
    </div>
)

export default QuestionAndAnswer
