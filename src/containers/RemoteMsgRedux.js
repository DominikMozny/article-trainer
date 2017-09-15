import {connect} from 'react-redux'
import RemoteMsg from "../components/RemoteMsg";
import {fetchQuestionsToBeAnswered} from "../actions/index";

const mapStateToProps = (state) => ({
    message: state.message
})

const mapDispatchToProps = {
    onClickLoadButton: fetchQuestionsToBeAnswered
}

const RemoteMsgRedux = connect(mapStateToProps, mapDispatchToProps)(RemoteMsg)


export default RemoteMsgRedux