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
import Footer from "./components/Footer";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
      error: null,
    };
  }

//   componentDidMount() {
//     Promise.all([
//         fetch(`http://localhost:9090/notes`),
//         fetch(`http://localhost:9090/folders`)
//     ])
//         .then(([notesRes, foldersRes]) => {
//             if (!notesRes.ok)
//                 return notesRes.json().then(e => Promise.reject(e));
//             if (!foldersRes.ok)
//                 return foldersRes.json().then(e => Promise.reject(e));

//             return Promise.all([notesRes.json(), foldersRes.json()]);
//         })
//         .then(([notes, folders]) => {
//             this.setState({notes, folders});
//         })
//         .catch(error => {
//             this.setState({error});
//         });
// }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/library' component={Library}/>
            <Route exact path='/builder' component={Builder}/>
            <Route path='/workout/:workoutId' component={Workout}/>
            <Route exact path='/basic-info' component={BasicInfo}/>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
