var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

// var ToDoList = require('ToDoList');
import ToDoList from 'ToDoList';
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var ToDoAPI = require('ToDoAPI');

var ToDoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: ToDoAPI.getTodos()
    }
  },
  componentDidUpdate: function() {
    ToDoAPI.setTodos(this.state.todos);
  },
  handleAddToDo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id:   uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = ToDoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">To Do List App</h1>
        <div className="row">
          <div className="columns small-11 medium-6 large-5 small-centered">
            <div className="container">
              <ToDoSearch onSearch={this.handleSearch}/>
              <ToDoList/>
              <AddToDo onAddToDo={this.handleAddToDo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ToDoApp;
