import React, { Component } from 'react';


class AnswerForm extends Component {
    render() {
        return (
            <div>
                <div>{this.props.word.substantive}</div>
                <div>
                    <button onClick={() => alert('Wrong!')}>le</button>
                    <button onClick={() => alert('Right!')}>la</button>
                </div>
            </div>
        );
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            word: {substantive: 'voiture', article: 'la'},
        };
    }
    render() {
        return (
            <AnswerForm word={this.state.word}/>
        );
    }
}



export default App;
