import React from 'react';
import CountdownTimer from "./CountdownTimer";

const answerButtons = (atbResToUserAnswer, questionForm, onClickAnswerButton) => {
    return atbResToUserAnswer ? null : questionForm.possibleAnswers.map((possibleAnswer) =>
        <div style={{display: 'inline-block'}}>
            <button className="answerButton"
                    onClick={() => onClickAnswerButton(questionForm.id, possibleAnswer)}>{possibleAnswer}</button>
        </div>
    )
}

const statisticsAnswers = (atbResToUserAnswer) => {
    return !atbResToUserAnswer ? null : <div style={{display: 'inline-block'}}>
        {atbResToUserAnswer.statisticsAnswers.map((statisticsAnswer) =>
            statistics(statisticsAnswer)
        )}
    </div>
}

const statistics = (statisticsAnswer) => {
    return <div className="statistics" style={{backgroundColor: getStatisticsColor(statisticsAnswer.correct)}}>
        {statisticsAnswer.userAnswer}
    </div>
}

const getStatisticsColor = (rightAnswer) => {
    if (rightAnswer) {
        return 'green'
    } else {
        return 'red'
    }
}

const getBgColor = (atbResToUserAnswer) => {
    if (atbResToUserAnswer) {
        if (atbResToUserAnswer.userAnswerResult) {
            return 'LightGreen';
        } else {
            return 'LightPink';
        }
    }
    return 'AliceBlue';
}

const showCountdown = (atbResToUserAnswer) => {
    if (atbResToUserAnswer) {
        return <CountdownTimer/>
    }
    return "";
}

const QuestionForm = ({questionForm, atbResToUserAnswer, onClickAnswerButton}) => (
    <div className="questionOuter" style={{backgroundColor: getBgColor(atbResToUserAnswer)}}>
        <div className="question" style={{display: 'inline-block'}}>
            {questionForm.question}
        </div>
        <div style={{display: 'inline-block'}}>
            {answerButtons(atbResToUserAnswer, questionForm, onClickAnswerButton)}
        </div>
        {statisticsAnswers(atbResToUserAnswer)}
        {showCountdown(atbResToUserAnswer)}

    </div>
)

export default QuestionForm
