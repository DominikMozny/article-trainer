import React, {Component} from 'react';
import './App.css';
import RemoteMsgRedux from "./containers/RemoteMsgRedux";
import WordFormRedux from "./containers/QuestionFormRedux";
import QuestionsAndAnswersRedux from "./containers/QuestionsAndAnswersRedux";

class App extends Component {
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

export default App;
