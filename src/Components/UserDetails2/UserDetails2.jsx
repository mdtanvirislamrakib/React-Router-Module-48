import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {

    const {name, username} = use(userPromise);
    return (
        <div>
            <p>User Name: {username}</p>
            <h4>Name: {name}</h4>
        </div>
    );
};

export default UserDetails2;