import React, { Component } from "react";

import Coder from './Components/Coder/Coder'
import Reviewer from './Components/Reviewer/Reviewer';

import socketIOClient from "socket.io-client";


class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:4001",
      buttonsShow: true, 
      coder: false,
      reviewer: false
    };

    this.handleCoderClick = this.handleCoderClick.bind(this);
    this.handleReviewerClick = this.handleReviewerClick.bind(this);

  }


  handleCoderClick() {
    this.setState({
      buttonsShow: false,
      coder: true
    })
  }

  handleReviewerClick() {
    this.setState({
      buttonsShow: false,
      reviewer: true
    })
  }
  
  render() {
    let game;

    if (this.state.coder === true) {
      game = <Coder />
    } else if (this.state.reviewer === true) {
      game = <Reviewer />
    }


    return (
      <div className="App">
        <p className="App-intro">
        </p>
        {
          this.state.buttonsShow?
          (
            <div>
              <button className="coder" onClick={this.handleCoderClick}>Coder</button>
              <button className="reviewer" onClick={this.handleReviewerClick}>Reviewer</button>
            </div>
          )
          :null
        }
        {game}
      </div>
    );
  }
}


export default App;