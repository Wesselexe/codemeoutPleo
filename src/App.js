import React, { Component } from "react";
import "./App.css";

import Coder from "./Components/Coder/Coder";
import Reviewer from "./Components/Reviewer/Reviewer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      buttonsShow: true,
      coder: false,
      reviewer: false
    };
  }

  componentDidMount(){
    document.title = "CodeMeOut"
  }

  handleCoderClick = () => {
    this.setState({
      buttonsShow: false,
      coder: true
    });
  };

  handleReviewerClick = () => {
    this.setState({
      buttonsShow: false,
      reviewer: true
    });
  };

  render() {
    let game;

    if (this.state.coder === true) {
      game = <Coder />;
    } else if (this.state.reviewer === true) {
      game = <Reviewer />;
    }

    return (
      <div className="App">
        <p className="App-intro" />
        {this.state.buttonsShow ? (
          <div>
            <div>
              <h1>Welcome to this awesome 2 player game!</h1>
              <p>In this game the objective is to work together to create a piece of code that returns a piece of code.</p>
              <p>The catch is that one player will only be able to see the code, while the second person only can see the input</p>
              <p>to the code, the output and the desired result.</p>
            </div>
            <button className="gameButton" onClick={this.handleCoderClick}>
              Coder
            </button>
            <button className="gameButton" onClick={this.handleReviewerClick}>
              Reviewer
            </button>
          </div>
        ) : null}
        {game}
      </div>
    );
  }
}

export default App;
