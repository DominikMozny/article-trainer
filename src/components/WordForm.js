import React from 'react';

const Answers = (props) => (
    props.answers.map((answer) =>
        <button>{answer}</button>)
)

function allAnswers(words) {
    const listForms = words.map((word) =>
        <div> {word} </div>
    );
    return listForms;
}


const WordForm = ({jsonWord}) => (
    <div>
        <div>{jsonWord.word}</div>
        {allAnswers(jsonWord.answers)}
    </div>
)

export default WordForm
