import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from "enzyme";
import {mount} from "enzyme";
import QuestionForm from "../../components/QuestionForm";
import React from "react";

Enzyme.configure({adapter: new Adapter()});

const question = "question"
const questionId = 123
const firstPossibleAnswer = "le"
const secondPossibleAnswer = "la"
const userAnswerResult1 = true
const userAnswerResult2 = false
const userAnswer1 = "le"
const userAnswer2 = "la"

function setup(props) {

    const enzymeWrapper = mount(<QuestionForm {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('component QuestionForm with possible answers', () => {
    const propsSetup = {
        questionForm: {id: questionId, question, possibleAnswers: [firstPossibleAnswer, secondPossibleAnswer]},
        onClickAnswerButton: jest.fn()
    }

    it('should contain question and possible answers', () => {
        const {enzymeWrapper} = setup(propsSetup)

        expect(enzymeWrapper.find('div.question').text()).toBe(question)
        expect(enzymeWrapper.find('button.possibleAnswer').at(0).text()).toBe(firstPossibleAnswer)
        expect(enzymeWrapper.find('button.possibleAnswer').at(1).text()).toBe(secondPossibleAnswer)
    })

    it('should have blue background', () => {
        const {enzymeWrapper} = setup(propsSetup)

        expect(enzymeWrapper.find('div.questionForm').props().style.backgroundColor).toBe('AliceBlue')
    })


    it('should call onClickAnswerButton with questionId and possibleAnswer', () => {
        const {enzymeWrapper, props} = setup(propsSetup)
        expect(props.onClickAnswerButton.mock.calls.length).toBe(0)

        const firstButton = enzymeWrapper.find('button.possibleAnswer').at(0)
        firstButton.props().onClick()
        expect(props.onClickAnswerButton.mock.calls.length).toBe(1)
        expect(props.onClickAnswerButton.mock.calls[0][0]).toBe(questionId)
        expect(props.onClickAnswerButton.mock.calls[0][1]).toBe(firstPossibleAnswer)

        const secondButton = enzymeWrapper.find('button.possibleAnswer').at(1)
        secondButton.props().onClick()
        expect(props.onClickAnswerButton.mock.calls.length).toBe(2)
        expect(props.onClickAnswerButton.mock.calls[1][0]).toBe(questionId)
        expect(props.onClickAnswerButton.mock.calls[1][1]).toBe(secondPossibleAnswer)
    })
})

describe('component QuestionForm with answer from ATB', () => {
    const propsWithRightAnswer = {
        questionForm: {id: questionId, question},
        onClickAnswerButton: jest.fn(),
        atbResToUserAnswer: {
            questionId: questionId,
            userAnswerResult: true,
            statisticsAnswers: [
                {userAnswer: userAnswer1, correct: userAnswerResult1},
                {userAnswer: userAnswer2, correct: userAnswerResult2}
            ]
        },
    }
    const propsWithWrongAnswer = {
        questionForm: {id: questionId, question},
        onClickAnswerButton: jest.fn(),
        atbResToUserAnswer: {
            questionId: questionId,
            userAnswerResult: false,
            statisticsAnswers: [
                {userAnswer: userAnswer1, correct: userAnswerResult1},
                {userAnswer: userAnswer2, correct: userAnswerResult2}
            ]
        },
    }
    it('should contain question, statistics and countdown timer', () => {
        const {enzymeWrapper} = setup(propsWithRightAnswer)
        expect(enzymeWrapper.find('div.question').text()).toBe(question)
        expect(enzymeWrapper.find('div.statisticsAnswer').at(0).text()).toBe(userAnswer1)
        expect(enzymeWrapper.find('div.statisticsAnswer').at(0).props().style.backgroundColor).toBe("green")
        expect(enzymeWrapper.find('div.statisticsAnswer').at(1).text()).toBe(userAnswer2)
        expect(enzymeWrapper.find('div.statisticsAnswer').at(1).props().style.backgroundColor).toBe("red")
        expect(enzymeWrapper.find('CountdownTimer').exists()).toEqual(true)

    })

    it('should have green background when userAnswerResult is right', () => {
        const {enzymeWrapper} = setup(propsWithRightAnswer)
        expect(enzymeWrapper.find('div.questionForm').props().style.backgroundColor).toBe('LightGreen')
    })

    it('should have red background when userAnswerResult is wrong', () => {
        const {enzymeWrapper} = setup(propsWithWrongAnswer)
        expect(enzymeWrapper.find('div.questionForm').props().style.backgroundColor).toBe('LightPink')
    })
})