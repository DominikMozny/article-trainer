import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import QuestionsAndAnswersRedux from "./containers/QuestionsAndAnswersRedux";
import {fetchQuestionsToBeAnswered} from "./actions/index";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestionsToBeAnswered())
    }

    render() {
        return (
            <div>
                <QuestionsAndAnswersRedux/>
            </div>
        );
    }
}

export default connect()(App);
