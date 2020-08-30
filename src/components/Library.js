import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import config from "../config";
import TokenService from "../services/token-service";
import Nav from "./Nav";

//receives workouts from user's database AND from Builder.js and renders Links to each Workout.js
export class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userWorkouts: [],
    };
  }

  componentDidMount() {
    //need the user's Id to assign to the userId variable

    const userId = TokenService.getUserId();

    // console.log(collectionId)

    let url = `${config.API_ENDPOINT}/workouts/users/${userId}`;

    console.log(url);

    fetch(url)
      .then((response) => response.json())

      .then((data) => {
        // console.log('success:', data)
        console.log(data);

        // let outPutObject = [];

        // let workoutDetails = data

        this.setState({
          userWorkouts: data,
        });
      })

      .catch((err) => {
        console.log(err);
      });

    console.log("Stateful component add workout successfully mounted.");
  }

  deleteWorkout(event) {
    event.preventDefault();

    const data = {};

    const formData = new FormData(event.target);

    for (let value of formData) {
      data[value[0]] = value[1];
    }

    console.log(data);

    let { workoutId } = data;
    console.log(workoutId);

    fetch(`${config.API_ENDPOINT}/workouts/${workoutId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => {
      window.location = `/library`;
    });
  }

  render() {
    const showUserWorkouts = this.state.userWorkouts.map((workout, key) => {
      //pass workout to workout.js as props, use componentDidMount in workout.js just as we did here, render exercises inside workout.js
      return (
        <>
          <div className="list" key={key}>
            <NavLink
              to={{
                pathname: `/workout/${workout.id}`,
                exerciseProps: {
                  difficulty: "easy",
                  // type: this.workout.type,
                  // user_id: this.workout.user_id,
                },
              }}
              //???? Trying to get workouts to be a link with {showUserWorkouts}
            >
              <h3>
                {workout.difficulty} - {workout.type}
              </h3>
            </NavLink>
            <form className="workoutForm" onSubmit={this.deleteWorkout}>
              <input type="hidden" name="workoutId" defaultValue={workout.id}></input>
              <button type="submit" className="workoutDeleteBtn">
                Delete Workout
              </button>
            </form>
          </div>
        </>
      );
    });
    return (
      <div className="empty-library">
        <p className="library-intro">
          Welcome to your personal workout library! It looks like you don't have
          any workouts. That's ok! Click the button below to create your first!
        </p>
        {/* <input className="add-workout" type="submit" value="Add Workout" /> */}

        {showUserWorkouts}

        <NavLink to="/builder">Add Workout</NavLink>
        <NavLink className="useful-info-link" to="/BasicInfo">
          <h5>Useful Information for Newcomers!</h5>
        </NavLink>
        {/* <a className="useful-info-link" href="placeholder">
          Useful Information for Newcomers!
        </a> */}
        <p className="disclaimer">
          Disclaimer: You should consult your physician or other health care
          professional before starting this or any other fitness program to
          determine if it is right for your needs. This is particularly true if
          you (or your family) have a history of high blood pressure or heart
          disease, or if you have ever experienced chest pain when exercising or
          have experienced chest pain in the past month when not engaged in
          physical activity, smoke, have high cholesterol, are obese, or have a
          bone or joint problem that could be made worse by a change in physical
          activity. Do not start this fitness program if your physician or
          health care provider advises against it. If you experience faintness,
          dizziness, pain or shortness of breath at any time while exercising
          you should stop immediately.
        </p>
      </div>
    );
  }
}

export default Library;
