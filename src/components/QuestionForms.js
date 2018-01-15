import React from 'react';
import Question from "./QuestionForm";

const getQuestions = (questionForms, answers, onClickAnswerButton) => {
    const answerMap = new Map(answers.map((i) => [i.questionId, i]))
    return questionForms.map((question) =>
        <div>
            <Question question={question}
                      onClickAnswerButton={onClickAnswerButton}
                      answer={answerMap.get(question.id)}/>
        </div>
    )
}

const QuestionForms = ({questionForms, answers, onClickAnswerButton}) => (
    <div>
        {getQuestions(questionForms, answers, onClickAnswerButton)}
    </div>
)

export default QuestionForms

