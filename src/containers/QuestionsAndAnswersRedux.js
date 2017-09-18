import {connect} from 'react-redux'
import QuestionsAndAnswers from "../components/QuestionsAndAnswers";
import {sendAnswer} from "../actions/index";

const mapStateToProps = (state) => ({
    answers: state.answers,
    questions: state.questions
})

const mapDispatchToProps = {
    onClickAnswerButton: sendAnswer
}

const QuestionsAndAnswersRedux = connect(mapStateToProps, mapDispatchToProps)(QuestionsAndAnswers)

export default QuestionsAndAnswersRedux