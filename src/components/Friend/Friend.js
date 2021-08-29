import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id} = props.friend;
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>ID: {id} <Link to={`/friend/${id}`}>Show detail of {name}</Link></p>
        </div>
    );
};

export default Friend;