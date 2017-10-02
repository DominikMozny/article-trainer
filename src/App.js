import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import QuestionsAndAnswersRedux from "./containers/QuestionsAndAnswersRedux";
import {fetchquestions} from "./actions/index";
import DevTools from "./DevTools";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchquestions())
    }

    render() {
        return (
            <div>
                <DevTools/>
                <QuestionsAndAnswersRedux/>
            </div>
        );
    }
}

export default connect()(App);
