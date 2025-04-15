import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const userData = useLoaderData();
    console.log(userData);
    const {name, website} = userData;

    const userDataStyle = {
        border: '2px solid green',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
    }
    return (
        <div style={userDataStyle}>
            <h2>Users Details Here</h2>
            <h3>Name: {name}</h3>
            <p>My Website: {website}</p>
        </div>
    );
};

export default UserDetails;