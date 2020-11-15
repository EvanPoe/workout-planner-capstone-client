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
      <div className="nav-bar">
        {TokenService.hasAuthToken() ? (
          <>
            <NavLink to="/">
              <h4>Home</h4>
            </NavLink>
            <NavLink to="/Library">
              <h4>Workouts Library</h4>
            </NavLink>
            <NavLink to="/" onClick={this.logOutClick}>
              <h4>Log Out</h4>
              {/*  {TokenService.getUserId()} */}
            </NavLink>
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Nav;
