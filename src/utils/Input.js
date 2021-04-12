import React, { Component } from 'react';
import "./Input.css";

class Input extends Component {
    render() {
        return (
            
            <div className="input">
                {this.props.input}
            </div>
            
            /*
            <textarea
                className="input"
                maxLength="9"
                value={this.props.input}
            >
            </textarea>
            */
        );
    }
};

export default Input;