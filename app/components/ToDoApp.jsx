var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var uuid = require('node-uuid');

var ToDoApp = React.createClass({
  getInitialState : function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the floor',
          completed: true
        },
        {
          id: uuid(),
          text: 'Smack my children',
          completed: true
        },
        {
          id: uuid(),
          text: 'Slap my camel',
          completed: false
        }
      ]
    }
  },
  handleAddToDo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id:   uuid(),
          text: text,
          completed: false
        }
      ]
    })
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div className="row">
        <div className="columns medium-8 large-6 small-centered">
          <ToDoSearch onSearch={this.handleSearch}/>
          <ToDoList todos={todos} onToggle={this.handleToggle}/>
          <AddToDo onAddToDo={this.handleAddToDo}/>
        </div>
      </div>
    )
  }
});

module.exports = ToDoApp;
