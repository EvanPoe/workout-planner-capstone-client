import React, { Component } from 'react';
import config from "../config";

export default class Workout extends Component {
    constructor(props) {
        super(props);
        this.state = {
          exercises: []
        };
      }

      componentDidMount() {
        const workoutId = this.props.match.params.workoutId;
  
        let url = `${config.API_ENDPOINT}/exercises/workout/${workoutId}`;
        console.log(url)
        fetch(url)
          .then((response) => response.json())
    
          .then((data) => {
            console.log('success:', data);
    

            let existingExercises = this.state.exercises;
            
            let updatedExercises = existingExercises.concat(data)
            console.log(updatedExercises)
    
            this.setState({
                exercises: updatedExercises,
            });
            console.log("exercises in state: ", this.state.exercises)
          })
    
          .catch((err) => {
            console.log(err);
          });
    
        console.log("Stateful component add book successfully mounted.");
      }  
    render() {
      //by default, show "no exercises found"
        let showWorkoutExercises = "No Exercises Found";
        //if there are exercises in the state...
        if (this.state.exercises.length > 0) {
          //...map them in order to display them
          showWorkoutExercises = this.state.exercises.map((exercise, key) => {
            return (
                <div className="list" key={key}>
                <h3>{exercise.name}</h3>
                <h3>{exercise.description}</h3>
                <h3>{exercise.sets}</h3>
                <h3>{exercise.rest}</h3>
                <h3>{exercise.image}</h3>
              </div>
            )
        });
        }
        
        return (
            <div>
                {showWorkoutExercises}
            </div>
        )
    }
}

