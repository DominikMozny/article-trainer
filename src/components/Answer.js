import React from 'react';

const Answer = ({answer}) => (
    <div style={{display: 'inline-block'}}>
        {answer.result.toString()}
    </div>
)

export default Answer
