import React, { Component } from "react";
import config from "../config";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      params: {
        loginEmail: "",
        loginPassword: "",
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
    let { loginEmail, loginPassword } = data;
    if (this.validateEmail(loginEmail) === "") {
      this.setState({
        error: "email is not valid",
      });
    }
    if (this.validatePassword(loginPassword) === "") {
      this.setState({
        error: "password is not valid",
      });
    }
    //assigning the object from the form data to params in the state
    this.setState({
      params: data,
    });

    //check if the state is populated with the search params data
    console.log(this.state.params);

    const searchURL = `${config.API_ENDPOINT}/registration-page`;

    const queryString = this.formatQueryParams(data);

    //sent all the params to the final url
    const url = searchURL + "?" + queryString;

    console.log(url);

    //define the API call parameters
    const options = {
      method: "POST",
      header: {
        Authorization: "",
        "Content-Type": "application/json",
      },
    };

    //useing the url and parameters above make the api call
    fetch(url, options)
      // if the api returns data ...
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        // ... convert it to json
        return res.json();
      })
      // use the json api output
      .then((data) => {
        //check if there is meaningfull data
        console.log(data);
        // check if there are no results
        if (data.totalItems === 0) {
          throw new Error("No data found");
        }
      })
      .catch((err) => {
        // this.setState({
        //   error: err.message,
        // });
      });
  };

  render() {
    //if there is an error message display it
    const errorMessage = this.state.error ? (
      <p className="error-message">{this.state.error}</p>
    ) : (
      false
    );
    return (
      <div className="login-page">
        <header>
          <h2 className="welcome-header">Welcome to Your Workout Planner!</h2>
        </header>
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <fieldset className="welcome-fieldset">
            {errorMessage}
            <div className="loginMessage">
              <h3>Log In</h3>
            </div>
            <label htmlFor="loginEmail">Email Address: </label>
            <input
              name="loginEmail"
              type="text"
              placeholder="Email"
              required
            />
            <label htmlFor="loginPassword">Password: </label>
            <input
              name="loginPassword"
              type="password"
              placeholder="Password"
              required
            />
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
