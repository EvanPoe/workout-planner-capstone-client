import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TokenService from "../services/token-service";
import config from "../config";

//this component fetches a single workout from the database and sends that data to the Library.js
export class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      databaseWorkouts: [],
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

  checkWorkoutDuplicates(user_id, difficulty, type) {}

  handleSubmit = (e) => {
    e.preventDefault();
    //create an object to store the search filters
    const userInputData = {};

    //get all the form data from the form component
    const formData = new FormData(e.target);

    //for each of the keys in form data populate it with form value
    for (let value of formData) {
      userInputData[value[0]] = value[1];
    }
    console.log(userInputData);
    // let { difficulty, type } = data;

    //assigning the object from the form data to params in the state
    this.setState({
      params: userInputData,
    });




    //checking for duplicates
    let url = `${config.API_ENDPOINT}/workouts/users/${TokenService.getUserId()}/${userInputData.difficulty}/${userInputData.type}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())

      .then((responseData) => {
        console.log("success:", responseData);

        //if the user doesn't have the workout, create it
        if (responseData.length == 0) {
          let payload = {
            user_id: TokenService.getUserId(),
            difficulty: userInputData.difficulty,
            type: userInputData.type,
          };
          console.log("the payload: ", payload)
          //define the API call parameters
          const options = {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(payload),
          };

          //useing the url and parameters above make the api call
          fetch(`${config.API_ENDPOINT}/workouts`, options)
            // if the api returns data ...
            .then((res) => {
              if (!res.ok) {
                throw new Error(
                  "Something went wrong, please try again later."
                );
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
              window.location.href = "/library"; //will work once an API is implemented and the data is successful
            })
            .catch((err) => {
              // this.setState({
              //   error: err.message,
              // });
            });
        }

        //if the user already has a workout like this, display an error
        else {
          this.setState({
            error: "Workout already exists",
          });
        }
      })

      .catch((err) => {
        console.log(err);
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
              <NavLink to="/Library" className="non-cta">Cancel</NavLink>
              {/* <input className="builder-cancel" type="submit" value="Cancel" /> */}
              <input className="builder-create" type="submit" value="Create" />
            </section>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Builder;
