import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import {fetchQuestionForms} from "./actions/index";
import DevTools from "./DevTools";
import ConfiguratorRedux from "./containers/ConfiguratorRedux";
import QuestionFormsRedux from "./containers/QuestionFormsRedux";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestionForms())
    }

    render() {
        return (
            <div>
                <DevTools/>
                <QuestionFormsRedux/>
                <ConfiguratorRedux/>
            </div>
        );
    }
}

export default connect()(App);
