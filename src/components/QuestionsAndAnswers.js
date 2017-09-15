import React from 'react';
import QuestionToBeAnswered from "./QuestionToBeAnswered";

const questions = (questionsToBeAnswered, onClickAnswerButton) => {
    return questionsToBeAnswered.map((questionToBeAnswered) =>
        <QuestionToBeAnswered questionToBeAnswered={questionToBeAnswered}
                              onClickAnswerButton={onClickAnswerButton}/>
    )
}

const QuestionsAndAnswers = ({questionsToBeAnswered, answeredQuestions, onClickAnswerButton}) => (
    <div>
        {questions(questionsToBeAnswered, onClickAnswerButton)}
    </div>
)

export default QuestionsAndAnswers

