// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// Logger with default options
import logger from 'redux-logger';

// State and reducers
const reducers = combineReducers({
  changeMe: (state = null, action) => state
});
const initialState = {
  // channel: channelReducer,
  // messageList: messageReducer
};

const store = createStore(
  reducers,
  applyMiddleware(logger)
);

// init username
const username = window.prompt("Your username");

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
