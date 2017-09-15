import React from 'react';

const QuestionsAndAnswers = ({questionsToBeAnswered, answeredQuestions}) => (
    <div>
        Length questions to be answered: {questionsToBeAnswered.length}
        <br/>
        Length answered questions: {answeredQuestions.length}
    </div>
)

export default QuestionsAndAnswers

