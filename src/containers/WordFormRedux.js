import {connect} from 'react-redux'
import WordForm from "../components/WordForm";
import {fetchMessage} from "../actions/index";
//import {fetchMessage} from "../actions/index";

const mapStateToProps = (state) => ({
    jsonWord: state.jsonWord
})

const mapDispatchToProps = {
    onClickLoadButton: fetchMessage
}

const WordFormRedux = connect(mapStateToProps, mapDispatchToProps)(WordForm)

export default WordFormRedux