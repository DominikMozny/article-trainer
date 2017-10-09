import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import QuestionsAndAnswersRedux from "./containers/QuestionsAndAnswersRedux";
import {fetchquestions} from "./actions/index";
import DevTools from "./DevTools";
import ConfiguratorRedux from "./containers/ConfiguratorRedux";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchquestions())
    }

    render() {
        return (
            <div>
                <DevTools/>
                <QuestionsAndAnswersRedux/>
                <ConfiguratorRedux/>
            </div>
        );
    }
}

export default connect()(App);
