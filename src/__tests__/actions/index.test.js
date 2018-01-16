import React from 'react';
import * as actions from '../../actions/index'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import {QUESTION_FORMS} from "../../constants/urls";
import {
    ADD_QUESTION_FORM, ADD_RIGHT_ANSWER, REMOVE_RIGHT_ANSWER,
    REPLACE_QUESTION_FORM
} from "../../constants/actionTypes";

describe('addQuestionForm', () => {
    it('should create action to add a question form', () => {
        const question = {
            id: 'some ID',
            question: 'some question',
            possibleAnswers: 'possibleAnswers'
        }
        const expectedAction = {
            type: ADD_QUESTION_FORM,
            id: question.id,
            question: question.question,
            possibleAnswers: question.possibleAnswers
        }
        expect(actions.addQuestionForm(question)).toEqual(expectedAction)
    })
})

describe('replaceQuestionForm', () => {
    it('should create action to replace a question form', () => {
        const atbResToUserAnswer = {
            questionId: 'some ID',
            nextQuestion: 'some question'
        }
        const expectedAction = {
            type: REPLACE_QUESTION_FORM,
            previousId: atbResToUserAnswer.questionId,
            nextQuestion: atbResToUserAnswer.nextQuestion
        }
        expect(actions.replaceQuestionForm(atbResToUserAnswer)).toEqual(expectedAction)
    })
})

describe('addRightAnswer', () => {
    it('should create action to add rightAnswer', () => {
        const atbResToUserAnswer = {
            questionId: 'some ID',
            userAnswerResult: 'some user answer result',
            statisticsAnswers: 'some statistics',
            nextQuestion: 'some question'
        }
        const expectedAction = {
            type: ADD_RIGHT_ANSWER,
            questionId: atbResToUserAnswer.questionId,
            userAnswerResult: atbResToUserAnswer.userAnswerResult,
            statisticsAnswers: atbResToUserAnswer.statisticsAnswers,
            nextQuestion: atbResToUserAnswer.nextQuestion
        }
        expect(actions.addRightAnswer(atbResToUserAnswer)).toEqual(expectedAction)
    })
})

describe('removeRightAnswer', () => {
    it('should create action to remove rightAnswer', () => {
        const atbResToUserAnswer = {
            questionId: 'some ID',
        }
        const expectedAction = {
            type: REMOVE_RIGHT_ANSWER,
            questionId: atbResToUserAnswer.questionId,
        }
        expect(actions.removeRightAnswer(atbResToUserAnswer)).toEqual(expectedAction)
    })
})


//Async actions
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('fetch questionForms from ATB', () => {
        fetchMock.getOnce(QUESTION_FORMS, {
            body: {
                questionForms: [{
                    id: "id",
                    question: "question",
                    possibleAnswers: "possibleAnswers"
                }]
            }, headers: {'content-type': 'application/json'}
        })

        const expectedActions = [
            {type: ADD_QUESTION_FORM, id: "id", question: "question", possibleAnswers: "possibleAnswers"}
        ]
        const store = mockStore({})
        return store.dispatch(actions.fetchQuestionForms()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

