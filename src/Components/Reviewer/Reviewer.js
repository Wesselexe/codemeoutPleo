import React from 'react';
import './Reviewer.css';



class Reviewer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            code: "No code yet"
        };

        

        this.socket.on('updateCode', function(data) {
            updateState(data);
        })

        const updateState = data => {
            console.log(data);
            this.setState({code: data});
            console.log('constructor', this.state.codeText);
        };

    }


    render() {
        return (
            <div className="window">
                <div className="input">

                </div>
                <div className="output">
                    <p>{this.state.code}</p>
                </div>
                <div className="result">

                </div>
                <div className="options">
                    <button className="help">
                        Need help?
                    </button>
                </div>
            </div>
        )
    }
}

export default Reviewer;