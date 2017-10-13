import React from 'react';

const Configurator = ({status, onSelectQuestionFile}) => (
    <div>
        <div>
            {status}
        </div>
        <div>
            Select file with definitions:
            <input type="file" name="questionFile" onChange={onSelectQuestionFile}/>
        </div>
    </div>
)

export default Configurator