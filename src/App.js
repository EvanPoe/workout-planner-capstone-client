import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Library from "./components/Library";
import Workout from "./components/Workout";
import BasicInfo from "./components/BasicInfo";
import Builder from "./components/Builder";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
      error: null,
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path='/Home' component={Home}/>
            <Route exact path='/Login' component={Login}/>
            <Route exact path='/Signup' component={Signup}/>
            <Route exact path='/Library' component={Library}/>
            <Route exact path='/Builder' component={Builder}/>
            <Route exact path='/Workout' component={Workout}/>
            <Route exact path='/BasicInfo' component={BasicInfo}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
