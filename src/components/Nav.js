import React, { Component } from "react";
import TokenService from "../services/token-service.js";
import { NavLink } from "react-router-dom";

export class Nav extends Component {
  logOutClick = () => {
    console.log("Logging out");
    TokenService.clearAuthToken();
    TokenService.getUserId = (id) => {
      // console.log(id)
    };

    window.location = "/";
  };

  render() {
    return (
      <div className="clearfix nav-bar">
      <h1 className="dumbbell-logo"><i className="fas fa-dumbbell"></i> Workout Planner</h1>
        {TokenService.hasAuthToken() ? (
          <div className="nav-link-wrapper">
            <NavLink to="/">
            <i className="fa fa-home clickables"></i>
              <span> Home</span>
            </NavLink>
            <NavLink to="/Library">
            <i className="fas fa-book-open"></i>
              <span> Workouts Library</span>
            </NavLink>
            <NavLink to="/" onClick={this.logOutClick}>
            <i className="fas fa-sign-out-alt"></i>
              <span> Log Out</span>
              {/*  {TokenService.getUserId()} */}
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Nav;
