import React from 'react';
import QuestionForm from "./QuestionForm";

const getQuestions = (questionForms, answers, onClickAnswerButton) => {
    const answerMap = new Map(answers.map((i) => [i.questionId, i]))
    return questionForms.map((questionForm) =>
        <div>
            <QuestionForm questionForm={questionForm}
                          onClickAnswerButton={onClickAnswerButton}
                          answer={answerMap.get(questionForm.id)}/>
        </div>
    )
}

const QuestionForms = ({questionForms, answers, onClickAnswerButton}) => (
    <div>
        {getQuestions(questionForms, answers, onClickAnswerButton)}
    </div>
)

export default QuestionForms

