import {combineReducers} from 'redux'

const message = (state = "No message obtained", action) => {
    switch (action.type) {
        case 'DISPLAY_MESSAGE':
            return action.message
        default:
            return state
    }
}

const jsonWord = (state = {
                      word: "no word",
                      answers: ["inv1", "inv2"]
                  },
                  action) => {
    switch (action.type) {
        case 'REFRESH_WORD':
            return action.jsonWord
        default:
            return state
    }
}

const reducers = combineReducers({message, jsonWord})

export default reducers
