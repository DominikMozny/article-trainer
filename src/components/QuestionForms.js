import React from 'react';
import QuestionForm from "./QuestionForm";

const getQuestions = (questionForms, atbResToUserAnswers, onClickAnswerButton) => {
    const answerMap = new Map(atbResToUserAnswers.map((i) => [i.questionId, i]))
    return questionForms.map((questionForm) =>
        <div>
            <QuestionForm questionForm={questionForm}
                          onClickAnswerButton={onClickAnswerButton}
                          atbResToUserAnswer={answerMap.get(questionForm.id)}/>
        </div>
    )
}

const QuestionForms = ({questionForms, atbResToUserAnswers, onClickAnswerButton}) => (
    <div>
        {getQuestions(questionForms, atbResToUserAnswers, onClickAnswerButton)}
    </div>
)

export default QuestionForms

