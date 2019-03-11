import React, { Component } from "react";

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
            <button className="coder" onClick={this.handleCoderClick}>
              Coder
            </button>
            <button className="reviewer" onClick={this.handleReviewerClick}>
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
