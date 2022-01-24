import React from "react";
import './ContainersS.css';

const ContainerSmall = props => {
    return (
        <div className="container-small">
            <div className="type-info">
                <h3 className="info">{props.info}</h3>
                <p>{props.value}</p>
            </div>
            <div className="icon-container">
                <img className="icon-content" src={props.icon} alt="type icon"/>
            </div>
        </div>
    )
}

export default ContainerSmall;