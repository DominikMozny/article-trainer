import {combineReducers} from 'redux'

export const answers = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ANSWER':
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

export const questions = (state = [], action) => {
    switch (action.type) {
        case 'ADD_QUESTION':
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


const reducers = combineReducers({answers, questions})

export default reducers
