import React from 'react';
import { Table } from 'react-bootstrap';

const UserDetail = ({ users, removeUser }) => {

    return (
        <div className="d-flex justify-content-center mt-5 container">
            {
                users.length ?
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => <tr key={user.email}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><button onClick={() => removeUser(user.email)} className="btn btn-danger">Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                    : <h3>Don't have any users.</h3>
            }

        </div>
    );
};

export default UserDetail;