var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

// export var AddToDo = React.createClass({
//   onSubmit: function(e) {
//     e.preventDefault();
//     var {dispatch} = this.props;
//
//     var toDoText = this.refs.toDoText.value;
//
//     if (toDoText && toDoText.length > 0) {
//       this.refs.toDoText.value = '';
//       dispatch(actions.startAddToDo(toDoText));
//     } else {
//       this.refs.toDoText.focus();
//     }
//   },
//   render: function () {
//     return (
//       <div className="container__footer">
//         <form ref="form" onSubmit={this.onSubmit} className="todo-form">
//           <input type="text" ref="toDoText" placeholder="Enter your to do item"/>
//           <button className="button expanded">Submit</button>
//         </form>
//       </div>
//     )
//   }
// });

export class AddToDo extends React.Component {
  constructor (props) {
    super (props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;

    var toDoText = this.refs.toDoText.value;

    if (toDoText && toDoText.length > 0) {
      this.refs.toDoText.value = '';
      dispatch(actions.startAddToDo(toDoText));
    } else {
      this.refs.toDoText.focus();
    }
  }
  render() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" ref="toDoText" placeholder="Enter your to do item"/>
          <button className="button expanded">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddToDo);
