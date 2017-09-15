import {connect} from 'react-redux'
import QuestionForm from "../components/QuestionForm";
import {sendAnswer} from "../actions/index";

const mapStateToProps = (state) => ({
    jsonWord: state.jsonWord
})

const mapDispatchToProps = {
    onClickAnswerButton: sendAnswer
}

const QuestionFormRedux = connect(mapStateToProps, mapDispatchToProps)(QuestionForm)

export default QuestionFormRedux