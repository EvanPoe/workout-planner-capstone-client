import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export class BasicInfo extends Component {
    render() {
        return (
            <div className="basic-info">
            <h3 className="info-title">Basic Information</h3>
            <ul>
              <li>
                <h5>Reps:</h5>
                <p>The number of times you perform an exercise. Reps is short for 'Repitition'. Fewer reps implies a heavier weight, which requires more skill as it carries a greater risk for injury if performed incorrectly. 10 - 15 reps is usually a good place to start.</p>
              </li>
              <li>
                <h5>Sets:</h5>
                <p>The number reps bundled together. A common example: 3 sets of 10 reps (usually displayed as 3 x 10).</p>
              </li>
              <li>
                <h5>Control:</h5>
                <p>An exercise should be done with slower speed to build control. Less control and greater speed often leads to injury.</p>
              </li>
              <li>
                <h5>Rest:</h5>
                <p>The amount of time spent resting between sets. Typically 60 seconds, however, rest as long as you need to avoid fatigue affecting your form.</p>
              </li>
              <li>
                <h5>Hydration:</h5>
                <p>Water intake is very important. Weigh yourself before you workout, then after. If you lost weight during the workout, that was water weight. Drink water until you regain the weight lost. </p>
              </li>
            </ul>
            <NavLink to='/Library'><i class="fas fa-arrow-left"></i> Back</NavLink>
            {/* <button onClick={window.history.back()} className="info-back-button">Back</button> */}
          </div>
        )
    }
}

export default BasicInfo
