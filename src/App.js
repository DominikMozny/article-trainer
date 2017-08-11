import React, { Component } from 'react';

class AnswerForm extends Component {
    constructor() {
        super();
        this.state = {
            word: 'voiture',
        };
    }
    render() {
        return (
            <div>
                <div>{this.state.word}</div>
                <div>
                    <button onClick={() => alert('Wrong!')}>le</button>
                    <button onClick={() => alert('Right!')}>la</button>
                </div>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <AnswerForm/>
        );
    }
}

export default App;
