import React from 'react';

const allAnswers = (words, onClickAnswerButton) => {
    return words.map((word) =>
        <button onClick={() => onClickAnswerButton(word)}> {word} </button>
    )
}

const WordForm = ({jsonWord, onClickAnswerButton}) => (
    <div>
        {jsonWord.word}
        {allAnswers(jsonWord.answers, onClickAnswerButton)}
        
    </div>
)

export default WordForm
