var React = require('react');
var uuid = require('node-uuid');

var ToDoList = require('ToDoList');
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
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = ToDoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div className="row">
        <div className="columns medium-8 large-6 small-centered">
          <ToDoSearch onSearch={this.handleSearch}/>
          <ToDoList todos={filteredTodos} onToggle={this.handleToggle}/>
          <AddToDo onAddToDo={this.handleAddToDo}/>
        </div>
      </div>
    )
  }
});

module.exports = ToDoApp;
