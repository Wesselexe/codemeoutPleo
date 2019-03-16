import React from 'react';

import "./Exercise.css"

import { socket } from "../../socket";

class Exercise1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ["Camel", "Cat", "Dog"],
            codeText: "",
            output: "",
            result: ["Camel", "Cat"]
        }

        socket().on("updateCode", this.updateCode);
    }

    updateCode = data => {
        this.setState({ codeText: data });

        let result = "Nothing yet"; 

        try {

            // console.log(this.state.codeText + ` test([${this.state.input.map(it => "'" + it + "'" )}])`)       
            eval(this.state.codeText + ` result = exercise1([${this.state.input.map(it => "'" + it + "'" )}])`)
            
            console.log(result)

            if (String(result) === String(this.state.result)) {
                this.setState({ output: " 🐪 🐈" });
                socket().emit("completedAssigment", "exercise1")
            } else {
                this.setState({ output: "" });

                for (let i = 0; i < result.length; i++) {
                    console.log(result[i])
                    if (result[i] === "Cat") {
                        this.setState({ output: this.state.output + " 🐈 " })
                    } else if (result[i] === "Camel") {
                        this.setState({ output: this.state.output + " 🐪 " })
                    } else if (result[i] === "Dog") {
                        this.setState({ output: this.state.output + " 🐕 " })
                    }
                }
            }

            console.log(this.state.output)

        }
        catch(err) {
            console.log("Error", err)
        }
        
      };

    render() {
        return(
            <div>
                <div className="input">
                    <h1>Input</h1>
                    <h1>🐪 🐈 🐕</h1>
                </div>
                <div className="result">
                    <h1>Result</h1>
                    <h1>🐪 🐈</h1>
                </div>
                <div className="output">
                    <h1>Output</h1>
                    <h1>{this.state.output}</h1>
                </div>
            </div>
        )
    }
}

export default Exercise1;