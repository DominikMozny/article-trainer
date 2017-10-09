import React from 'react';

const Configurator = ({status, onClickDeleteAllButton}) => (
    <div>
        <div>
            {status}
        </div>
        <div>
            <button
                onClick={() => onClickDeleteAllButton()}>Delete all questions
            </button>
        </div>
    </div>
)

export default Configurator