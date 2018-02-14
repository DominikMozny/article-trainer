import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from "enzyme";
import {mount} from "enzyme";
import QuestionForm from "../../components/QuestionForm";
import React from "react";

Enzyme.configure({adapter: new Adapter()});

const question = "question"

function setup() {
    const props = {
        questionForm: {id: 123, question, possibleAnswers: ["le", "la"]},
        atbResToUserAnswer: {questionId: 123, userAnswerResult: true, statisticsAnswers: []},
        onClickAnswerButton: jest.fn()
    }

    const enzymeWrapper = mount(<QuestionForm {...props} />)

    return {
        props,
        enzymeWrapper
    }
}


describe('component QuestionForm', () => {
    it('should test some component', () => {
        const {enzymeWrapper} = setup()

        expect(enzymeWrapper.find('div.question').text()).toBe(question)

        expect(enzymeWrapper.find('div').at(0).hasClass('questionOuter')).toBe(true)

        //todo
    })
})