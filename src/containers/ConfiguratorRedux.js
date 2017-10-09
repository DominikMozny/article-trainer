import {connect} from 'react-redux'
import {deleteAllQuestions} from "../actions/index";
import Configurator from "../components/Configurator";

const mapStateToProps = (state) => ({
    status: state.configStatus,
})
const mapDispatchToProps = {
    onClickDeleteAllButton: deleteAllQuestions
}

const ConfiguratorRedux = connect(mapStateToProps, mapDispatchToProps)(Configurator)

export default ConfiguratorRedux