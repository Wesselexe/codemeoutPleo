import React from 'react';
import './Reviewer.css';

import Exercise1 from '../../Components/Exercise/Exercise1'
import Exercise2 from '../../Components/Exercise/Exercise2'
import Exercise3 from '../../Components/Exercise/Exercise3'

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

        socket().on('returnToSelection', this.return)
    }

    updateCode = data => {
        this.setState({ code: data });
      };

    assigmentCompleted = data => {
        this.setState({
            completed: true,
            selectExercise: false
        });
    };

    selectExercise = event => {
        this.setState({
            exercise: event.target.value,
            selectExercise: false
        });
    };

    return = () => {
        this.setState({
            exercise: "",
            selectExercise: true
        });
    };

    render() {

        let exercise;

        switch (this.state.exercise) {
            case "Exercise 1":
                exercise = <Exercise1 />;
                break;
            case "Exercise 2":
                exercise = <Exercise2 />;
                break;
            case "Exercise 3":
                exercise = <Exercise3 />;
                break;
            default:
                exercise = "";
        }

        return (
            <div>
                {this.state.selectExercise ? (
                    <div className="selectExercise">
                        <p>Select excercise</p>
                        <button className="gameButton" value="Exercise 1" onClick={this.selectExercise}>Exercise 1</button>
                        <button className="gameButton" value="Exercise 2" onClick={this.selectExercise}>Exercise 2</button>
                        <button className="gameButtonHard" value="Exercise 3" onClick={this.selectExercise}>Exercise 3</button>
                    </div>
                ) : null}
                {exercise}
            </div>
        )
    }
}

export default Reviewer;