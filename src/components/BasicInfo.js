import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export class BasicInfo extends Component {
    render() {
        return (
            <div className="basic-info">
            <h3 className="info-title">Basic Information</h3>
            <ul>
              <li>
                <h5>Sets:</h5>
                <p>Lorem ipsum dolor sit amet, qui an errem temporibus comprehensam, sed no sumo justo ullum.</p>
              </li>
              <li>
                <h5>Reps:</h5>
                <p>Lorem ipsum dolor sit amet, qui an errem temporibus comprehensam, sed no sumo justo ullum.</p>
              </li>
              <li>
                <h5>Control:</h5>
                <p>Lorem ipsum dolor sit amet, qui an errem temporibus comprehensam, sed no sumo justo ullum.</p>
              </li>
              <li>
                <h5>Rest:</h5>
                <p>Lorem ipsum dolor sit amet, qui an errem temporibus comprehensam, sed no sumo justo ullum.</p>
              </li>
              <li>
                <h5>Hydration:</h5>
                <p>Lorem ipsum dolor sit amet, qui an errem temporibus comprehensam, sed no sumo justo ullum.</p>
              </li>
            </ul>
            <NavLink to='/Library'>Back</NavLink>
            {/* <button onClick={window.history.back()} className="info-back-button">Back</button> */}
          </div>
        )
    }
}

export default BasicInfo
