import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const userData = useLoaderData();
    const {name, website} = userData;

    const navigate = useNavigate();

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
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
};

export default UserDetails;