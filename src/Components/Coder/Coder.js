import React from "react";
import "./Coder.css";

import { socket } from "../../socket";
class Coder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: "",
      codeText: "nothing"
    };
  }

  handleCodeChange = event => {
    //this.setState({code: event.target.value});
    console.log("checking the state before emitting", this.state.codeText);
    socket().emit("codeFromEditor", event.target.value);
    socket().on("updateCode", this.updateCode);
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
              placeholder="Type here to translate!"
              onChange={this.handleCodeChange}
            />
          </div>
        </div>
        <div className="options">
          <p>{this.state.codeText}</p>
        </div>
      </div>
    );
  }
}

export default Coder;
