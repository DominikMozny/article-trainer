import {combineReducers} from 'redux'
import {
    ADD_QUESTION_FORM,
    ADD_RIGHT_ANSWER_WITH_STATS,
    REMOVE_RIGHT_ANSWER,
    REPLACE_QUESTION_FORM,
    UPDATE_CONFIG_STATUS
} from "../constants/actionTypes";

export const answers = (state = [], action) => {
    switch (action.type) {
        case ADD_RIGHT_ANSWER_WITH_STATS:
            return [
                ...state,
                {
                    questionId: action.questionId,
                    userAnswerResult: action.userAnswerResult,
                    statisticsAnswers: action.statisticsAnswers
                }
            ]
        case REMOVE_RIGHT_ANSWER:
            return [
                ...state.filter(answer => answer.questionId !== action.questionId),
            ]
        default:
            return state
    }
}

export const questionForms = (state = [], action) => {
    switch (action.type) {
        case ADD_QUESTION_FORM:
            return [
                ...state,
                {
                    id: action.id,
                    question: action.question,
                    possibleAnswers: action.possibleAnswers
                }
            ]
        case REPLACE_QUESTION_FORM:
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
        case UPDATE_CONFIG_STATUS:
            return action.status
        default:
            return status
    }
}

const reducers = combineReducers({answers, questionForms, configStatus})

export default reducers
