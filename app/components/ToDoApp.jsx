var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import ToDoList from 'ToDoList';
import AddToDo from 'AddToDo';
import ToDoSearch from 'ToDoSearch';

var ToDoApp = React.createClass({
  render: function () {
    return (
      <div>
        <div className="page-actions">
          <a href="#">Log out</a>
        </div>
        <h1 className="page-title">To Do List App</h1>
        <div className="row">
          <div className="columns small-11 medium-6 large-5 small-centered">
            <div className="container">
              <ToDoSearch/>
              <ToDoList/>
              <AddToDo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ToDoApp;
