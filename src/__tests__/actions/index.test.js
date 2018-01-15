import React from 'react';
import * as actions from '../../actions/index'

describe('addQuestionForm', () => {
    it('should create action to add a question form', () => {
        const question = {
            id: 'some ID',
            question: 'some question',
            possibleAnswers: 'possibleAnswers'
        }
        const expectedAction = {
            type: 'ADD_QUESTION_FORM',
            id: question.id,
            question: question.question,
            possibleAnswers: question.possibleAnswers
        }
        expect(actions.addQuestionForm(question)).toEqual(expectedAction)
    })
})

describe('replaceQuestionForm', () => {
    it('should create action to replace a question form', () => {
        //TODO
    })
})
