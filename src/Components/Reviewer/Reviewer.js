import React from 'react';
import './Reviewer.css';

import Exercise1 from '../../Components/Exercise/Exercise1'

import { socket } from "../../socket";

class Reviewer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            code: "No code yet",
            selectExercise: true,
            exercise: "",
            completed: false
        };

        socket().on("updateCode", this.updateCode);

        socket().on('updateCompletedAssigment', this.assigmentCompleted)
    }

    updateCode = data => {
        this.setState({ code: data });
      };

    assigmentCompleted = data => {
        this.setState({
            completed: true
        })
    };

    selectExercise = event => {
        console.log(event.target.value)
        this.setState({
            exercise: event.target.value,
            selectExercise: false
        })
    }

    render() {

        let exercise;
        let congratulation;

        if (this.state.exercise === "Exercise 1") {
            exercise = <Exercise1 />;
        }

        if (this.state.completed === true) {
            congratulation = <h1>Hurray! you did it!</h1>
        }

        return (
            <div>
                {this.state.selectExercise ? (
                    <div className="selectExercise">
                        <p>Select excercise</p>
                        <button className="gameButton" value="Exercise 1" onClick={this.selectExercise}>Exercise 1</button>
                    </div>
                ) : null}
                {exercise}
            </div>
        )
    }
}

export default Reviewer;