var React = require("react");
var {connect} = require('react-redux');
var ToDo = require("ToDo");

var ToDoList = React.createClass({
  render: function () {
    var {todos} = this.props;

    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do yet!</p>
        );
      }
      return todos.map((todo) => {
        return (
          <ToDo key={todo.id} {...todo}/>
        )
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = connect(
  (state) => {
    return {
      todos: state.todos
    }
  }
)(ToDoList);
