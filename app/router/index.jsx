import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import firebase from 'app/firebase/';
import ToDoApp from 'ToDoApp';
import Login from 'Login'

// must be logged in to visit page
var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="/todos" component={ToDoApp} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);
