import React from 'react';
import * as Redux from 'react-redux'

import ToDoList from 'ToDoList';
import AddToDo from 'AddToDo';
import ToDoSearch from 'ToDoSearch';
import * as actions from 'actions';

// export var ToDoApp = React.createClass({
//
//   onLogout(e) {
//     e.preventDefault();
//     var {dispatch} = this.props;
//
//     dispatch(actions.startLogout());
//   },
//   render: function () {
//     return (
//       <div>
//         <div className="page-actions">
//           <a href="#" onClick={this.onLogout}>Log out</a>
//         </div>
//         <h1 className="page-title">To Do List App</h1>
//         <div className="row">
//           <div className="columns small-11 medium-6 large-5 small-centered">
//             <div className="container">
//               <ToDoSearch/>
//               <ToDoList/>
//               <AddToDo/>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// });

export class ToDoApp extends React.Component {
  constructor (props) {
    super (props)
    this.onLogout = this.onLogout.bind(this)
  }
  onLogout(e) {
    e.preventDefault();
    var {dispatch} = this.props;

    dispatch(actions.startLogout());
  }
  render () {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Log out</a>
        </div>
        <h1 className="page-title">To Do List App</h1>
        <div className="row">
          <div className="columns small-11 medium-6 large-5 small-centered">
            <div className="container">
              <ToDoSearch/>
              <ToDoList/>
              <AddToDo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Redux.connect()(ToDoApp);
