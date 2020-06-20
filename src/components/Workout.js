import React, { Component } from "react";

export class Workout extends Component {
  render() {
    return (
      <div className="workout-page">
        <h3 className="workout-title">Beginner Workout</h3>
        <h4 className="workout-type">Upper Body</h4>
        <ul className="workout-list">
          <li>
            <h5>Pushups</h5>
            <img
              className="pushup-image"
              alt="pushup"
              src="https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <p>
              Pushups are a great exercise for your chest, shoulders, and arms
            </p>
          </li>
          <li>
            <h5>Overhead Press</h5>
            <img
              className="overhead-press-image"
              alt="overhead-press"
              src="https://static8.depositphotos.com/1167812/889/i/450/depositphotos_8892146-stock-photo-seated-shoulder-press-studio-shot.jpg"
            />
            <p>
              Overhead presses are a great exercise for your shoulders, and arms
            </p>
          </li>
        </ul>
        <input type="submit" value="Back" className="workout-back-button" />
      </div>
    );
  }
}

export default Workout;
