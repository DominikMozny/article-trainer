import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <div>voiture</div>
                <div>
                    <button onClick={() => alert('Wrong!')}>le</button>
                    <button onClick={() => alert('Right!')}>la</button>
                </div>
            </div>
        );
    }
}

export default App;
