import {connect} from 'react-redux'
import WordForm from "../components/WordForm";
import {fetchMessage, sendAnswer} from "../actions/index";

const mapStateToProps = (state) => ({
    jsonWord: state.jsonWord
})

const mapDispatchToProps = {
    onClickAnswerButton: sendAnswer
}

const WordFormRedux = connect(mapStateToProps, mapDispatchToProps)(WordForm)

export default WordFormRedux