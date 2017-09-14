import {connect} from 'react-redux'
import RemoteMsg from "../components/RemoteMsg";
import {fetchMessage} from "../actions/index";

const mapStateToProps = (state) => ({
    message: state.message
})

const mapDispatchToProps = {
    onClickLoadButton: fetchMessage
}

const RemoteMsgRedux = connect(mapStateToProps, mapDispatchToProps)(RemoteMsg)


export default RemoteMsgRedux