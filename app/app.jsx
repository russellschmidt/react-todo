var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var ToDoApp = require('ToDoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var ToDoAPI = require('ToDoAPI');

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
  ToDoAPI.setTodos(state.todos);
});

var initialTodos = ToDoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// // load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp/>
  </Provider>,
  document.getElementById('app')
);
