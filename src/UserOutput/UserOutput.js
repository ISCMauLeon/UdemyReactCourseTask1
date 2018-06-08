import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div>
            <p className="first-par">Username: {props.username} </p>
            <p className="second-par">{props.children}</p>
        </div>
    )
}

export default UserOutput;