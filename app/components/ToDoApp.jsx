var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');

var ToDoApp = React.createClass({
  getInitialState : function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the floor'
        },
        {
          id: 3,
          text: 'Smack my children'
        },
        {
          id: 4,
          text: 'Slap my camel'
        }
      ]
    }
  },
  handleAddToDo: function (text) {
    alert("New To Do: " + text);
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
          <ToDoList todos={todos}/>
          <AddToDo onAddToDo={this.handleAddToDo}/>
        </div>
      </div>
    )
  }
});

module.exports = ToDoApp;
