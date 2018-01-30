import React from 'react';
import * as actions from '../../actions/index'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import {QUESTION_FORMS, USER_ANSWER} from "../../constants/urls";
import {
    ADD_QUESTION_FORM,
    ADD_RIGHT_ANSWER_WITH_STATS,
    REMOVE_RIGHT_ANSWER_WITH_STATS,
    REPLACE_QUESTION_FORM
} from "../../constants/actionTypes";
import {WAIT_BEFORE_NEW_QUESTION_IN_MS} from "../../constants/staticConfiguration";

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
            type: ADD_RIGHT_ANSWER_WITH_STATS,
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
            type: REMOVE_RIGHT_ANSWER_WITH_STATS,
            questionId: atbResToUserAnswer.questionId,
        }
        expect(actions.removeRightAnswer(atbResToUserAnswer)).toEqual(expectedAction)
    })
})


//Async actions
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('fetch questionForms from ATB', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('should fetch questionForms from ATB', () => {
        fetchMock.getOnce(QUESTION_FORMS, {
            body: {
                questionForms: [{
                    id: "id1",
                    question: "question1",
                    possibleAnswers: "possibleAnswers1"
                }, {
                    id: "id2",
                    question: "question2",
                    possibleAnswers: "possibleAnswers2"
                }]
            }, headers: {'content-type': 'application/json'}
        })

        const expectedActions = [
            {type: ADD_QUESTION_FORM, id: "id1", question: "question1", possibleAnswers: "possibleAnswers1"},
            {type: ADD_QUESTION_FORM, id: "id2", question: "question2", possibleAnswers: "possibleAnswers2"}
        ]
        const store = mockStore({})
        return store.dispatch(actions.fetchQuestionForms()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

describe('send UserAnswer to ATB', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })


    it('should send UserAnswer to ATB and then update relevant QuestionForm with data from ATB Response', () => {
        fetchMock.postOnce(USER_ANSWER, {
            body: {
                questionId: "questionId",
                statisticsAnswers: "statisticsAnswers",
                nextQuestion: "nextQuestion",
                userAnswerResult: "userAnswerResult"
            }, headers: {'content-type': 'application/json'}
        })

        const questionId = "questionId"
        const answer = "answer"

        const expectedActionsBeforeReplacingQuestionForm = [
            {
                "type": "ADD_RIGHT_ANSWER_WITH_STATS",
                "nextQuestion": "nextQuestion",
                "questionId": "questionId",
                "statisticsAnswers": "statisticsAnswers",
                "userAnswerResult": "userAnswerResult"
            }
        ]
        const expectedActionsAfterReplacingQuestionForm = [
            {
                "type": "ADD_RIGHT_ANSWER_WITH_STATS",
                "nextQuestion": "nextQuestion",
                "questionId": "questionId",
                "statisticsAnswers": "statisticsAnswers",
                "userAnswerResult": "userAnswerResult"
            },
            {
                "type": "REPLACE_QUESTION_FORM",
                "nextQuestion": "nextQuestion",
                "previousId": "questionId"
            },
            {
                "type": "REMOVE_RIGHT_ANSWER_WITH_STATS",
                "questionId": "questionId"
            }
        ]
        const store = mockStore({})
        jest.useFakeTimers()
        return store.dispatch(actions.sendUserAnswer(questionId, answer)).then(() => {
            expect(setTimeout).toHaveBeenCalledTimes(2);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), WAIT_BEFORE_NEW_QUESTION_IN_MS);
            expect(store.getActions()).toEqual(expectedActionsBeforeReplacingQuestionForm)
            jest.runAllTimers()
            expect(store.getActions()).toEqual(expectedActionsAfterReplacingQuestionForm)
        })
    })
})

