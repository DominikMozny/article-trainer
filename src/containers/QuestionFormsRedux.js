import {connect} from 'react-redux'
import QuestionForms from "../components/QuestionForms";
import {sendUserAnswer} from "../actions/index";

const mapStateToProps = (state) => ({
    answers: state.answers,
    questionForms: state.questionForms
})

const mapDispatchToProps = {
    onClickAnswerButton: sendUserAnswer
}

const QuestionFormsRedux = connect(mapStateToProps, mapDispatchToProps)(QuestionForms)

export default QuestionFormsRedux