import React from 'react';
import { NavLink } from 'react-router';

const User = ({user}) => {
    const {id, name, email, phone} = user;

    const userStyle = {
        border: '2px solid green',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
    }
    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <NavLink to={`/users/${id}`}>Show Details</NavLink>
        </div>
    );
};

export default User;