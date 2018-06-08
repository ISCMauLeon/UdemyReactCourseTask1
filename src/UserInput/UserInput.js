import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <input style={props.style} type="text" value={props.username} value={props.username} onChange={props.change} />
    )
}

export default UserInput;