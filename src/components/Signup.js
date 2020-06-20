import React, { Component } from "react";

export class Signup extends Component {
  render() {
    return (
      <div className="sign-up-page">
        <header>
          <h2 className="welcome-header">Welcome to Your Workout Planner!</h2>
        </header>
        <form className="login-form">
          <fieldset className="welcome-fieldset">
            <div className="create-user-message">
              <h3>Sign Up for an Account </h3>
            </div>
            <label htmlFor="create-email">Enter Email Address: </label>
            <input name="create-email" type="text" />
            <label htmlFor="create-password">Enter Password: </label>
            <input name="create-password" type="text" />
            <label htmlFor="verify-password">Re-enter Password: </label>
            <input name="verify-password" type="text" />
            <label htmlFor="get-started">Let's Get Started!</label>
            <input name="get-started" type="submit" value="Register" />
            <a href="placeholder">Returning User? Log In Here...</a>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Signup;
