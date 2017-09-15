import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import RemoteMsgRedux from "./containers/RemoteMsgRedux";
import WordFormRedux from "./containers/QuestionFormRedux";
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
                <RemoteMsgRedux/>
                <WordFormRedux/>
            </div>
        );
    }
}

export default connect()(App);
