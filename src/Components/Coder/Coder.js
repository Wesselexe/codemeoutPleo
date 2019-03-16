import React from "react";
import "./Coder.css";

import { socket } from "../../socket";


class Coder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      codeText: "function exercise1(a) {}"
    };
  }

  handleCodeChange = event => {
    console.log("checking the state before emitting", this.state.codeText);
    this.cursor = event.target.selectionStart;
    this.setState({ codeText: event.target.value });
    socket().emit("codeFromEditor", event.target.value);
  };

  handleCurserPos = event => {
    event.target.selectionStart = this.cursor;
  }

  render() {
    return (
      <div className="window">
        <div className="editor">
          <div className="code">
            <textarea
              className="body"
              onChange={this.handleCodeChange}
              onFocus={this.handleCurserPos}
              value={this.state.codeText}
            />
          </div>
        </div>
        <div className="optionsCoder">
          <p>Remember to include a return statement!</p>
        </div>
      </div>
    );
  }
}

export default Coder;
