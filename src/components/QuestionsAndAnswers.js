import React from 'react';
import Question from "./QuestionAndAnswer";

const getQuestionsAndAnswers = (questions, answers, onClickAnswerButton) => {
    const answerMap = new Map(answers.map((i) => [i.questionId, {questionId: i.questionId, result: i.result}]))
    return questions.map((question) =>
        <div>
            <Question question={question}
                      onClickAnswerButton={onClickAnswerButton}
                      answer={answerMap.get(question.id)}/>
        </div>
    )
}

const QuestionsAndAnswers = ({questions, answers, onClickAnswerButton}) => (
    <div>
        {getQuestionsAndAnswers(questions, answers, onClickAnswerButton)}
    </div>
)

export default QuestionsAndAnswers

