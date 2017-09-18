import React from 'react';
import Question from "./Question";

const getQuestions = (questions, onClickAnswerButton) => {
    return questions.map((question) =>
        <Question question={question}
                              onClickAnswerButton={onClickAnswerButton}/>
    )
}

const QuestionsAndAnswers = ({questions, answers, onClickAnswerButton}) => (
    <div>
        {getQuestions(questions, onClickAnswerButton)}
    </div>
)

export default QuestionsAndAnswers

