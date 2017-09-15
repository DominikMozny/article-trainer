import {combineReducers} from 'redux'

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


const reducers = combineReducers({answeredQuestions, questionsToBeAnswered})

export default reducers
