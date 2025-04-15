import React, { Suspense, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {
    const [showInfo, setShowInfo] = useState(false);
    const {id, name, email, phone} = user;

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());


    const navigate = useNavigate();
    const handleUserDetails = () => {
        navigate(`/users/${id}`);
    }
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

            <button onClick={handleUserDetails}>User of: {id}</button>

            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? "Hide" : "Show"} Info</button>
            {
                showInfo && <Suspense fallback ={<span>Loading data....</span>}>
                    <UserDetails2 userPromise = {userPromise}></UserDetails2>
                </Suspense>
            }
        </div>
    );
};

export default User;