import React from 'react';

const Configurator = ({status, onClickDeleteAllButton, onSelectQuestionFile}) => (
    <div>
        <div>
            {status}
        </div>
        <div>
            <button
                onClick={() => onClickDeleteAllButton()}>Delete all questions
            </button>
        </div>
        <div>
            Select file with definitions:
            <input type="file" name="questionFile" onChange={onSelectQuestionFile}/>
        </div>
    </div>
)

export default Configurator