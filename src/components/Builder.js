import React, { Component } from "react";
import config from '../config';

export class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      params: {
        difficulty: "",
        type: "",
      },
    };
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params).map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    );
    return queryItems.join("&");
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
    // let { difficulty, type } = data;

    //assigning the object from the form data to params in the state
    this.setState({
      params: data
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
      <div className="workout-builder">
        <h3 className="builder-title">Workout Builder</h3>
        <form onSubmit={this.handleSubmit}>
          <fieldset className="builder-fieldset">
          {errorMessage}
            <label className="difficulty-label" htmlFor="difficulty">
              Please select level of desired workout difficulty.
            </label>
            <select name="difficulty" className="select-difficulty">
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>

            <label className="type-label" htmlFor="type">
              Please select the type of workout desired.
            </label>
            <select name="type" className="select-type">
              <option value="upper">Upper</option>
              <option value="lower">Lower</option>
            </select>
            <section className="builder-submits">
              <input className="builder-cancel" type="submit" value="Cancel" />
              <input className="builder-create" type="submit" value="Create" />
            </section>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Builder;
