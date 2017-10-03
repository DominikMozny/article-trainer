import React from 'react';
import CountdownTimer from "./CountdownTimer";

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

const showCountdown = (answer) => {
    if (answer) {
        return <CountdownTimer/>
    }
    return "";
}

const QuestionAndAnswer = ({question, answer, onClickAnswerButton}) => (
    <div className="questionOuter" style={{backgroundColor: getBgColor(answer)}}>
        <div className="questionInner" style={{display: 'inline-block'}}>
            {question.question}
        </div>
        {answers(answer, question, onClickAnswerButton)}
        {showCountdown(answer)}

    </div>
)

export default QuestionAndAnswer
