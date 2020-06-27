import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

export class Library extends Component {
  render() {
    return (
      <div className="empty-library">
        <p className="library-intro">
          Welcome to your personal workout library! It looks like you don't have
          any workouts. That's ok! Click the button below to create your first!
        </p>
        {/* <input className="add-workout" type="submit" value="Add Workout" /> */}
        <NavLink to='/Builder'>Add Workout</NavLink>
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
