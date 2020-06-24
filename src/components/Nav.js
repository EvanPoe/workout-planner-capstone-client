import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <div className="nav-bar">
        <NavLink to="/Home">
          <h4>Home</h4>
        </NavLink>
        <NavLink to="/Library">
          <h4>Exercise Library</h4>
        </NavLink>
        <NavLink to="Login">
          <h4>Log-In/Log-Out</h4>
        </NavLink>
        {/* <nav>
          <ul >
            <li>Home</li>
            <li>Exercise Library</li>
            <li>Log-In/Log-Out</li>
          </ul>
        </nav> */}
      </div>
    );
  }
}

export default Nav;
