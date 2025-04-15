import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const useres = use(usersPromise)
    console.log(useres);
    return (
        <div>
            <h2>This is user 2</h2>
        </div>
    );
};

export default Users2;