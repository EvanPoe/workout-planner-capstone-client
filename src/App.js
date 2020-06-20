import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Library from './components/Library';
import Workout from './components/Workout';
import BasicInfo from './components/BasicInfo';
import Builder from './components/Builder';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Login />
      <Signup />
      <Library />
      <Builder />
      <Workout />
      <BasicInfo />
    </div>
  );
}

export default App;
