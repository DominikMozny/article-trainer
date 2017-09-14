export const showMessage = (message) => ({
    type: 'DISPLAY_MESSAGE',
    message
})

export const refreshWord = (jsonWord) => ({
    type: 'REFRESH_WORD',
    jsonWord
})


export const fetchMessage = () => dispatch => {
    dispatch(showMessage('Loading'))
    fetch('http://localhost:8080/getWord')
        .then(response => response.json())
        .then(json => {
            dispatch(showMessage(JSON.stringify(json)))
            dispatch(refreshWord(json))
        })
        .catch(e => dispatch(showMessage(e.toString())))
}
