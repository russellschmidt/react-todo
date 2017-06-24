var React = require("react");
var {connect} = require('react-redux');
var moment = require("moment");
var actions = require('actions');

// export var ToDo = React.createClass({
//   render: function () {
//     var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
//     var todoClassName = completed ? 'todo todo-completed' : 'todo';
//     var renderDate = () => {
//       var message = 'Created ';
//       var timestamp = createdAt;
//
//       if (completed){
//         message = 'Completed ';
//         timestamp = completedAt;
//       }
//
//       return message + moment.unix(timestamp).format('MMM Do, Y @ H:mm');
//     };
//
//     return (
//       <div className={todoClassName} onClick={() => {
//         dispatch(actions.startToggleToDo(id, !completed));
//       }}>
//         <div>
//           <input type="checkbox" checked={completed} readOnly/>
//         </div>
//         <div>
//           <p>{text}</p>
//           <p className="todo__subtext">{renderDate()}</p>
//         </div>
//       </div>
//     )
//   }
// });

export class ToDo extends React.Component {
  constructor (props){
    super(props)
  }
  render () {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed){
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do, Y @ H:mm');
    };

    return (
      <div className={todoClassName} onClick={() => {
        dispatch(actions.startToggleToDo(id, !completed));
      }}>
        <div>
          <input type="checkbox" checked={completed} readOnly/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
}

export default connect()(ToDo);

// module.exports = connect()(ToDo);
