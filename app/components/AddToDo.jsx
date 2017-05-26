var React = require('react');

var AddToDo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var toDoText = this.refs.toDoText.value;

    if (toDoText && toDoText.length > 0) {
      this.refs.toDoText.value = '';
      this.props.onAddToDo(toDoText);
    } else {
      this.refs.toDoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" ref="toDoText" placeholder="Enter your to do item"/>
          <button className="button expanded">Submit</button>
        </form>
      </div>
    )
  }
});

module.exports = AddToDo;
