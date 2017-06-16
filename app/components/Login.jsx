var React = require("react");
var {connect} = require('react-redux');
var {Link} = require('react-router');

export var Login = React.createClass({
  render() {
    return (
      <div>
        <h1 className="page-title">Octorusty ToDo App</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Use your github account below</p>
              <button className="button">Login with Github</button>
            </div>
          </div>
        </div>
        <Link to="/todos">Todos</Link>
      </div>
    );
  }
});

export default connect()(Login)
