import React from "react";
import "./Coder.css";

import { socket } from "../../socket";


class Coder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      codeText: "function exercise1(a) {}"
    };

    socket().on("updateCode", this.updateCode);
  }

  handleCodeChange = event => {
    console.log("checking the state before emitting", this.state.codeText);
    socket().emit("codeFromEditor", event.target.value);
  };

  updateCode = data => {
    this.setState({ codeText: data });
  };

  render() {
    return (
      <div className="window">
        <div className="editor">
          <div className="code">
            <textarea
              className="body"
              onChange={this.handleCodeChange}
              value={this.state.codeText}
            />
          </div>
        </div>
        <div className="options">
          <p>Remember to include a return statement!</p>
        </div>
      </div>
    );
  }
}

export default Coder;
