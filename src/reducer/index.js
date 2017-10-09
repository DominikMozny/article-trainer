import {combineReducers} from 'redux'

export const answers = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ANSWER':
            return [
                ...state,
                {
                    questionId: action.questionId,
                    result: action.result
                }
            ]
        case 'REMOVE_ANSWER':
            return [
                ...state.filter(answer => answer.questionId !== action.questionId),
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
        case 'REPLACE_QUESTION':
            return state.map(question =>
                (question.id === action.previousId)
                    ? action.nextQuestion
                    : question
            )

        default:
            return state
    }
}

export const configStatus = (status = "", action) => {
    switch (action.type) {
        case 'UPDATE_CONFIG_STATUS':
            return action.status
        default:
            return status
    }
}

const reducers = combineReducers({answers, questions, configStatus})

export default reducers
