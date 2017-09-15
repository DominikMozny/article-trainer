import React, {Component} from 'react';
import './App.css';
import RemoteMsgRedux from "./containers/RemoteMsgRedux";
import WordFormRedux from "./containers/QuestionFormRedux";

class App extends Component {
    render() {
        return (
            <div>
                <RemoteMsgRedux/>
                <WordFormRedux/>
            </div>
        );
    }
}

export default App;
