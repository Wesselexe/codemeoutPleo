import React from 'react';
import './Coder.css';

import socketIOClient from "socket.io-client";


class Coder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            endpoint: "http://localhost:4001",
            code: "",
            codeText: "nothing"
        };

        this.handleCodeChange = this.handleCodeChange.bind(this);
    }


    handleCodeChange(event) {
        //this.setState({code: event.target.value});
        console.log('checking the state before emitting', this.state.codeText)
        const socket = socketIOClient(this.state.endpoint);
        socket.emit('codeFromEditor', event.target.value);
    }


    render() {

        const socket = socketIOClient(this.state.endpoint);
        socket.on('updateCode', (data) => {
            this.setState({codeText: data})
        })

        return (
            <div className="window">
                <div className="editor">
                   <div className="code">
                   <textarea className="body"
                        placeholder="Type here to translate!"
                        onChange={this.handleCodeChange}
                    />
                   </div>
                </div>
                <div className="options">
                    <p>{this.state.codeText}</p>
                </div>
            </div>
        )
    }
}

export default Coder;