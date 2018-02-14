import React from 'react';
import reducers, {atbResToUserAnswers, questionForms} from "../../reducer";
import {
    ADD_QUESTION_FORM,
    ADD_RIGHT_ANSWER_WITH_STATS,
    REMOVE_RIGHT_ANSWER_WITH_STATS,
    REPLACE_QUESTION_FORM
} from "../../constants/actionTypes";

describe('all reducers initial state', () => {
    it('should return initial state', () => {
        expect(reducers(undefined, {})).toEqual(
            {"answers": [], "configStatus": "", "questionForms": []}
        )
    })

})

describe('answers reducer initial state', () => {
    it('state should be empty', () => {
        expect(atbResToUserAnswers(undefined, {})).toEqual(
            []
        )
    })
})

describe('answers ADD_RIGHT_ANSWER_WITH_STATS, state undefined', () => {
    it('state should contain one answer', () => {
        const action = {
            type: ADD_RIGHT_ANSWER_WITH_STATS,
            questionId: "questionId",
            userAnswerResult: "userAnswerResult",
            statisticsAnswers: "statisticsAnswers"
        }
        expect(atbResToUserAnswers(undefined, action)).toEqual([
            {
                questionId: action.questionId,
                userAnswerResult: action.userAnswerResult,
                statisticsAnswers: action.statisticsAnswers
            }
        ])
    })
})

describe('answers ADD_RIGHT_ANSWER_WITH_STATS, state contains one question', () => {
    it('state should contain two answers', () => {
        const existingQuestion = {
            questionId: 'existingQuestionId',
            userAnswerResult: 'existingUserAnswerResult',
            statisticsAnswers: 'existingStatisticsAnswers'

        }
        const action = {
            type: ADD_RIGHT_ANSWER_WITH_STATS,
            questionId: "questionId",
            userAnswerResult: "userAnswerResult",
            statisticsAnswers: "statisticsAnswers"
        }
        expect(atbResToUserAnswers([existingQuestion], action)).toEqual([
            {
                questionId: existingQuestion.questionId,
                userAnswerResult: existingQuestion.userAnswerResult,
                statisticsAnswers: existingQuestion.statisticsAnswers
            },
            {
                questionId: action.questionId,
                userAnswerResult: action.userAnswerResult,
                statisticsAnswers: action.statisticsAnswers
            }
        ])
    })
})

describe('answers REMOVE_RIGHT_ANSWER_WITH_STATS, state contains one question', () => {
    it('state should contain no answers', () => {
        const state = {
            questionId: "questionId",
            userAnswerResult: "userAnswerResult",
            statisticsAnswers: "statisticsAnswers"
        }

        const action = {
            type: REMOVE_RIGHT_ANSWER_WITH_STATS,
            questionId: state.questionId,
            userAnswerResult: state.userAnswerResult,
            statisticsAnswers: state.statisticsAnswers
        }
        expect(atbResToUserAnswers([state], action)).toEqual([])
    })
})

describe('questionForms reducer initial state', () => {
    it('state should be empty', () => {
        expect(questionForms(undefined, {})).toEqual(
            []
        )
    })
})

describe('questionForms ADD_QUESTION_FORM, state contains one question', () => {
    it('state should contain two questions', () => {
        const existingQuestion = {
            id: 'existingQuestionId',
            question: 'existingQuestion',
            possibleAnswers: 'existingPossibleAnswers'

        }
        const action = {
            type: ADD_QUESTION_FORM,
            id: 'newQuestionId',
            question: 'newQuestion',
            possibleAnswers: 'newPossibleAnswers'
        }
        expect(questionForms([existingQuestion], action)).toEqual([
            {
                id: existingQuestion.id,
                question: existingQuestion.question,
                possibleAnswers: existingQuestion.possibleAnswers
            },
            {
                id: action.id,
                question: action.question,
                possibleAnswers: action.possibleAnswers
            }
        ])
    })
})


describe('questionForms ADD_QUESTION_FORM, state contains one question', () => {
    it('state should contain two questions', () => {
        const existingQuestion = {
            id: 'existingQuestionId',
            question: 'existingQuestion',
            possibleAnswers: 'existingPossibleAnswers'

        }
        const action = {
            type: ADD_QUESTION_FORM,
            id: 'newQuestionId',
            question: 'newQuestion',
            possibleAnswers: 'newPossibleAnswers'
        }
        expect(questionForms([existingQuestion], action)).toEqual([
            {
                id: existingQuestion.id,
                question: existingQuestion.question,
                possibleAnswers: existingQuestion.possibleAnswers
            },
            {
                id: action.id,
                question: action.question,
                possibleAnswers: action.possibleAnswers
            }
        ])
    })
})

describe('questionForms REPLACE_QUESTION_FORM, state contains one question', () => {
    it('state should contain one replaced question', () => {
        const existingQuestion = {
            id: 444,
            question: 'existingQuestion',
            possibleAnswers: 'existingPossibleAnswers'

        }
        const action = {
            type: REPLACE_QUESTION_FORM,
            previousId: existingQuestion.id,
            nextQuestion: {question: 'newQuestion', possibleAnswers: 'possibleAnswers'}
        }
        expect(questionForms([existingQuestion], action)).toEqual([action.nextQuestion
        ])
    })
})
