import {connect} from 'react-redux'
import QuestionsAndAnswers from "../components/QuestionForms";
import {sendUserAnswer} from "../actions/index";

const mapStateToProps = (state) => ({
    answers: state.answers,
    questionForms: state.questionForms
})

const mapDispatchToProps = {
    onClickAnswerButton: sendUserAnswer
}

const QuestionFormsRedux = connect(mapStateToProps, mapDispatchToProps)(QuestionsAndAnswers)

export default QuestionFormsRedux