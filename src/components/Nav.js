import React, { Component } from "react";

export class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="nav-bar">
            <li>Home</li>
            <li>Exercise Library</li>
            <li>Log-In/Log-Out</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
