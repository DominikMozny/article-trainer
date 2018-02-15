import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from "enzyme";
import {shallow} from "enzyme";
import React from "react";
import QuestionForms from "../../components/QuestionForms";

Enzyme.configure({adapter: new Adapter()});

const questionForm1 = {id: 1}
const questionForm2 = {id: 2}
const atbResToUserAnswer1 = {questionId: 1}
const atbResToUserAnswer2 = {questionId: 2}
const onClickAnswerButton = 123;

function setup() {
    const props = {
        questionForms: [questionForm1, questionForm2],
        atbResToUserAnswers: [atbResToUserAnswer1, atbResToUserAnswer2],
        onClickAnswerButton: onClickAnswerButton
    }


    const enzymeWrapper = shallow(<QuestionForms {...props} />)
    return enzymeWrapper
}

describe('component QuestionForms', () => {

    it('should contain 2 QuestionForm components', () => {
        const enzymeWrapper = setup()

        expect(enzymeWrapper.find('QuestionForm').length).toBe(2)
        expect(enzymeWrapper.find('QuestionForm').at(0).props().questionForm).toBe(questionForm1)
        expect(enzymeWrapper.find('QuestionForm').at(0).props().atbResToUserAnswer).toBe(atbResToUserAnswer1)
        expect(enzymeWrapper.find('QuestionForm').at(0).props().onClickAnswerButton).toBe(onClickAnswerButton)
        expect(enzymeWrapper.find('QuestionForm').at(1).props().questionForm).toBe(questionForm2)
        expect(enzymeWrapper.find('QuestionForm').at(1).props().atbResToUserAnswer).toBe(atbResToUserAnswer2)
        expect(enzymeWrapper.find('QuestionForm').at(1).props().onClickAnswerButton).toBe(onClickAnswerButton)
    })

})
