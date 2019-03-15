import React from 'react';
import './Reviewer.css';

import Excercise1 from '../../Components/Exercise/Exercise1'

import { socket } from "../../socket";

class Reviewer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            code: "No code yet"
        };

        socket().on("updateCode", this.updateCode);
    }

    updateCode = data => {
        this.setState({ code: data });
      };

    render() {
        return (
            <div className="window">
                < Excercise1 />
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