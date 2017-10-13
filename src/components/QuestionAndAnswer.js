import React from 'react';
import CountdownTimer from "./CountdownTimer";

const answerButtons = (answer, question, onClickAnswerButton) => {
    return answer ? null : question.answers.map((answer) =>
        <div style={{display: 'inline-block'}}>
            <button className="answerButton"
                    onClick={() => onClickAnswerButton(question.id, answer)}>{answer}</button>
        </div>
    )
}

const statisticsAnswers = (answer) => {
    return !answer ? null : <div style={{display: 'inline-block'}}>
        {answer.statisticsAnswers.map((statistics) =>
            statisticsAnswer(statistics)
        )}
    </div>
}

const statisticsAnswer = (statisticsAnswer) => {
    return <div className="statistics" style={{backgroundColor: getStatisticsColor(statisticsAnswer.rightAnswer)}}>
        {statisticsAnswer.answer}
    </div>
}

const getStatisticsColor = (rightAnswer) => {
    if (rightAnswer) {
        return 'green'
    } else {
        return 'red'
    }
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
        <div style={{display: 'inline-block'}}>
            {answerButtons(answer, question, onClickAnswerButton)}
        </div>
        {statisticsAnswers(answer)}
        {showCountdown(answer)}

    </div>
)

export default QuestionAndAnswer
