import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import QuestionsAndAnswersRedux from "./containers/QuestionsAndAnswersRedux";
import {fetchquestions} from "./actions/index";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchquestions())
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
