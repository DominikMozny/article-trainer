import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, compose, createStore} from 'redux'
import reducers from "./reducer/index";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import DevTools from './DevTools'

const middleware = [thunk]

const enhancer = compose(
    applyMiddleware(...middleware),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
);
const store = createStore(reducers, enhancer)

ReactDOM.render(
    <Provider store={store}>
        <App>
        </App>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
