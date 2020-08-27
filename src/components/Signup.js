import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service.js';
import config from "../config";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      params: {
        signUpEmail: "",
        signUpPassword: "",
      },
    };
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params).map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    );
    return queryItems.join("&");
  }

  validateEmail(inputEmail) {
    let outputEmail = inputEmail;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputEmail.match(mailformat)) {
      outputEmail = "";
    }
    return outputEmail;
  }

  validatePassword(inputPassword) {
    let outputPassword = inputPassword;
    // at least one number, one lowercase and one uppercase letter
    // at least eight characters that are letters, numbers or the underscore
    let passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
    if (!inputPassword.match(passwordformat)) {
      outputPassword = "";
    }
    return outputPassword;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //create an object to store the search filters
    const data = {};

    //get all the from data from the form component
    const formData = new FormData(e.target);

    //for each of the keys in form data populate it with form value
    for (let value of formData) {
      data[value[0]] = value[1];
    }
    console.log(data);
    let { signUpEmail, signUpPassword, verifyPassword } = data;
    if (this.validateEmail(signUpEmail) === "") {
      this.setState({
        error: "email is not valid",
      });
    }
    if (this.validatePassword(signUpPassword) === "") {
      this.setState({
        error: "password is not valid",
      });
    }
    if (signUpPassword != verifyPassword) {
      this.setState({
        error: "passwords do not match",
      });
    }
    //assigning the object from the form data to params in the state
    this.setState({
      params: data,
    });

    //check if the state is populated with the search params data
    console.log(this.state.params);

    AuthApiService.postUser({
      email: signUpEmail,
      password: signUpPassword,
  })

  .then(response => {
      console.log('user:', response)
      TokenService.saveAuthToken(response.authToken)
      TokenService.saveUserId(response.id)
      window.location = '/library'
  }) 

  .catch(res => {
      this.setState({ error: res.error })
  })  
  };

  render() {
    //if there is an error message display it
    const errorMessage = this.state.error ? (
      <p className="error-message">{this.state.error}</p>
    ) : (
      false
    );
    return (
      <div className="sign-up-page">
        <header>
          <h2 className="welcome-header">Welcome to Your Workout Planner!</h2>
        </header>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <fieldset className="welcome-fieldset">
            <div className="create-user-message">
              <h3>Sign Up for an Account </h3>
              {errorMessage}
            </div>
            <label htmlFor="signUpEmail">Enter Email Address: </label>
            <input name="signUpEmail" type="text" />
            <label htmlFor="signUpPassword">Enter Password: </label>
            <input name="signUpPassword" type="password" />
            <label htmlFor="verifyPassword">Re-enter Password: </label>
            <input name="verifyPassword" type="password" />
            <label htmlFor="getStarted">Let's Get Started!</label>
            <input name="getStarted" type="submit" value="Register" />
            <NavLink to='/Login'>Returning User? Log In Here...</NavLink>
            {/* <a href="placeholder">Returning User? Log In Here...</a> */}
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Signup;
