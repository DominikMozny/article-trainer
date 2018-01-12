import React from 'react';
import * as actions from '../../actions/index'

describe('addQuestion', () => {
    it('should create action to add a question', () => {
        const question = {
            id: 'some ID',
            question: 'some question',
            answers: 'answers'
        }
        const expectedAction = {
            type: 'ADD_QUESTION',
            id: question.id,
            question: question.question,
            answers: question.answers
        }
        expect(actions.addQuestion(question)).toEqual(expectedAction)
    })
})

describe('replaceQuestion', () => {
    it('should create action to replace a question', () => {
        //TODO
    })
})
