var React = require('react');

var ToDoForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var toDoText = this.refs.todotext.value;

    if (toDoText && toDoText.length > 0) {
      this.refs.todotext.value = '';
      this.props.onAddToDo(toDoText);
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" ref="todotext" placeholder="Enter your to do item"/>
          <button className="button expanded">Submit</button>
        </form>
      </div>
    )
  }
});

module.exports = ToDoForm;
