import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore} from 'redux'
import reducers from "./reducer/index";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const middleware = [thunk]
const store = createStore(reducers, applyMiddleware(...middleware))

ReactDOM.render(
    <Provider store={store}>
        <App>
        </App>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
