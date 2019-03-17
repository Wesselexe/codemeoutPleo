import React from 'react';

import "./Exercise.css"

import { socket } from "../../socket";

class Exercise2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ["Owl", "Monkey", "Cow"],
            codeText: "",
            output: "",
            result: ["Cow", "Monkey", "Owl"],
            completed: false
        }

        socket().on("updateCode", this.updateCode);

        socket().on("updateCompletedAssigment", this.completedExercise);
    }

    completedExercise = data => {
        this.setState({
            completed: true
        })
    }

    return = () => {
        socket().emit('return')
    }

    updateCode = data => {
        this.setState({ codeText: data });

        let result = "Nothing yet";

        try {

            // console.log(this.state.codeText + ` test([${this.state.input.map(it => "'" + it + "'" )}])`)       
            eval(this.state.codeText + ` result = exercise([${this.state.input.map(it => "'" + it + "'" )}])`)

            if (String(result) === String(this.state.result)) {
                this.setState({ output: "🐄 🐒 🦉" });
                socket().emit("completedAssigment", "exercise2")
            } else {
                this.setState({
                    output: "",
                    completed: false
                });

                for (let i = 0; i < result.length; i++) {

                    if (result[i] === "Owl") {
                        this.setState({ output: this.state.output + " 🦉 " })
                    } else if (result[i] === "Monkey") {
                        this.setState({ output: this.state.output + " 🐒 " })
                    } else if (result[i] === "Cow") {
                        this.setState({ output: this.state.output + " 🐄 " })
                    }
                }
            }
        }
        catch(err) {
            //console.log("Error", err)
        }
        
      };

    render() {
        return(
            <div>
                <div className="input">
                    <h1>Input</h1>
                    <h1>🦉 🐒 🐄</h1>
                </div>
                <div className="result">
                    <h1>Result</h1>
                    <h1>🐄 🐒 🦉</h1>
                </div>
                <div className="output">
                    <h1>Output</h1>
                    <h1>{this.state.output}</h1>
                    {this.state.completed ? (
                        <div>
                            <h1>🎉 HURRAY! You made it! 🎉</h1>
                            <button onClick={this.return} className="returnButton">Click here to select new excercise</button>
                        </div>
                    ) : null}
                </div>
            </div>
        )
    }
}

export default Exercise2;