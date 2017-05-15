var React = require('react');
var ToDoList = require('ToDoList');

var ToDoApp = React.createClass({
  getInitialState : function () {
    return {
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
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <ToDoList todos={todos}/>
      </div>
    )
  }
});

module.exports = ToDoApp;
