import React, { Component } from 'react';


class AnswerForm extends Component {
    render() {
        return (
            <div>
                <div>{this.props.word.substantive}</div>
                <div>
                    <button onClick={() => popupAnswer(this.props.word.article, 'le')}>le</button>
                    <button onClick={() => popupAnswer(this.props.word.article, 'la')}>la</button>
                </div>
            </div>
        );
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            word1: {substantive: 'voiture', article: 'la'},
            word2: {substantive: 'oiseau', article: 'le'},
        };
    }
    render() {
        return (
            <div>
                <AnswerForm word={this.state.word1}/>
                <AnswerForm word={this.state.word2}/>
            </div>

        );
    }
}

function popupAnswer(answer, rightAnswer) {
    if(answer === rightAnswer) {
        alert('Right!');
        return;
    }
    alert('Wrong :(');
}



export default App;
