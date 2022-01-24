/* eslint-disable jsx-a11y/alt-text */
import React from "react";


const Button = props => {
    return (
            <button
                className="btn-header">
                    <img 
                        className="icons"
                        src={props.icon} 
                        style={{filter: 'invert(1%) grayscale(100%)' }}/>
                        {props.text}
            </button>
    )
}

export default Button;