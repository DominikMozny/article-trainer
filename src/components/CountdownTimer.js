import React, {Component} from 'react';
import {WAIT_BEFORE_NEW_QUESTION_IN_MS} from "../constants/staticConfiguration";

class CountdownTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {countdown: WAIT_BEFORE_NEW_QUESTION_IN_MS};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            50
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            countdown: this.state.countdown - 50
        });
    }

    render() {
        return (
            <div style={{display: 'inline-block'}}>
                {parseFloat(Math.round(this.state.countdown / 100) / 10).toFixed(1)}
            </div>
        );
    }
}

export default CountdownTimer
