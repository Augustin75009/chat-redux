// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import messagesReducer from './reducers/messages_reducer';
// Logger with default options

// Promise


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';


// State and reducers
const reducers = combineReducers({
  // changeMe: (state = null, action) => state
  messages: messagesReducer
});
const initialState = {
  messages: [
    {
      author: "anonymous92",
      content: "Hello world!",
      created_at: "2017-09-26T23:03:16.365Z"
    },
    {
      author: "anonymous77",
      content: "My name is anonymous77",
      created_at: "2017-09-26T23:03:21.194Z"
    }
  ],
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
  <Provider store={createStore(reducers, initialState)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
