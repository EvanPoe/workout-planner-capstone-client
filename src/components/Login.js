import React, { Component } from "react";

export class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <header>
          <h2 className="welcome-header">Welcome to Your Workout Planner!</h2>
        </header>
        <form className="login-form">
          <fieldset className="welcome-fieldset">
            <div className="login-message">
              <h3>Log In</h3>
            </div>
            <label htmlFor="login-email">Email Address: </label>
            <input name="login-email" type="text" />
            <label htmlFor="login-password">Password: </label>
            <input name="login-password" type="text" />
            <label htmlFor="get-started">Let's Get Going!</label>
            <input name="get-started" type="submit" value="Log In" />
            <a href="placeholder">New User? Create an Account Here...</a>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Login;
