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

export const answeredQuestions = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ANSWERED_QUESTION':
            return [
                ...state,
                {
                    id: action.id,
                    answer: action.answer
                }
            ]
        default:
            return state
    }
}

export const questionsToBeAnswered = (state = [], action) => {
    switch (action.type) {
        case 'ADD_QUESTION_TO_BE_ANSWERED':
            return [
                ...state,
                {
                    id: action.id,
                    question: action.question,
                    answers: action.answers
                }
            ]
        default:
            return state
    }
}


const reducers = combineReducers({message, jsonWord, answeredQuestions, questionsToBeAnswered})

export default reducers
