// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

import { Provider } from 'react-redux';
import { createStore,
  combineReducers,
  applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// reducers
import messagesReducer from './reducers/messages_reducer';
import channelReducer from './reducers/channel_reducer';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// const username = prompt("Your username");

const identityReducer = (state = null) => state;

const initialState = {
  messages: [],
  channels: ['general', 'pote', 'comet'],
  currentUser: 'AugustinC'
};

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelReducer,
  currentUser: identityReducer
});


const Middleware = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers,
  initialState,
  Middleware);

// init username

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/general" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
