import {connect} from 'react-redux'
import {addAllQuestions, deleteAllQuestions} from "../actions/index";
import Configurator from "../components/Configurator";

const mapStateToProps = (state) => ({
    status: state.configStatus,
})
const mapDispatchToProps = {
    onClickDeleteAllButton: deleteAllQuestions,
    onSelectQuestionFile: addAllQuestions
}

const ConfiguratorRedux = connect(mapStateToProps, mapDispatchToProps)(Configurator)

export default ConfiguratorRedux