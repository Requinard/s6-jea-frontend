import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Routes from './Routes'
import {hashHistory, Router} from "react-router";
import {MuiThemeProvider} from "material-ui";
import {Provider,} from 'react-redux'
import reducers from './reducers/index'
import {applyMiddleware, compose, createStore} from "redux";
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import persistState from 'redux-localstorage'

const enhancer = compose(
    persistState()
);

const store = createStore(reducers,
    enhancer,
    applyMiddleware(thunk, logger));


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={hashHistory}
                    routes={Routes}/>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
