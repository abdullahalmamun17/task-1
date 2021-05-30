import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import User from '../User/User';
import UserDetail from '../UserDetail/UserDetail';

const Home = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)

    const handleUserData = (data) => {
        const isExistUser = users.find(user => user.email === data.email)

        if (!isExistUser) {
            setError(null)
            setUsers([...users, data])
        } else {
            setError('User already Exists.')
        }
    };

    const removeUser = email => {
        const newUsers = users.filter(user => user.email !== email)
        setUsers(newUsers)
    }

    return (
        <div className="Home">
            <User handleUserData={handleUserData} error={error}></User>
            <UserDetail users={users} removeUser={removeUser}></UserDetail>
            <Dashboard></Dashboard>
        </div>
    );
};

export default Home;