import React from 'react';

const RemoteMsg = ({message, onClickLoadButton}) => (
    <div>
        <p>{message}</p>
        <button onClick={onClickLoadButton}>Load</button>
    </div>
)

export default RemoteMsg