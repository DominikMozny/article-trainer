import React from 'react';
import reducers, {answers, questionForms} from "../../reducer";
import {ADD_RIGHT_ANSWER_WITH_STATS, REMOVE_RIGHT_ANSWER_WITH_STATS} from "../../constants/actionTypes";


describe('all reducers initial state', () => {
    it('should return initial state', () => {
        expect(reducers(undefined, {})).toEqual(
            {"answers": [], "configStatus": "", "questionForms": []}
        )
    })

})

describe('answers reducer initial state', () => {
    it('should return initial state', () => {
        expect(answers(undefined, {})).toEqual(
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
        expect(answers(undefined, action)).toEqual([
            {
                questionId: action.questionId,
                userAnswerResult: action.userAnswerResult,
                statisticsAnswers: action.statisticsAnswers
            }
        ])
    })
})

describe('answers ADD_RIGHT_ANSWER_WITH_STATS, state contains one question', () => {
    it('state should contain two questions', () => {
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
        expect(answers([existingQuestion], action)).toEqual([
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
    it('state should contain no questions', () => {
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
        expect(answers([state], action)).toEqual([])
    })
})

describe('questionForms reducer initial state', () => {
    it('should return initial state', () => {
        expect(questionForms(undefined, {})).toEqual(
            []
        )
    })
})

describe('questionForms ADD_QUESTION_FORM ', () => {
    it('should return answers with two answers', () => {
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
        expect(answers([existingQuestion], action)).toEqual([
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



