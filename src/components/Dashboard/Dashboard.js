import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import data from '../../data/data';

const Dashboard = () => {
    const [allData, setData] = useState(data)

    console.log(allData)

    return (
        <div className="container mt-5">
            <h4 className="text-center mb-3">Dashboard</h4>
            <Table bordered striped>
                <thead>
                    <tr className="bg-dark text-white">
                        <th>Module Name</th>
                        <th>Activity Name</th>
                        <th>Create</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Approve</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData.map(item => <tr key={item.id}>
                            <td>{item.moduleName}</td>
                            <td>{item.activityName}</td>
                            <td>
                                <input
                                    onChange={event => {
                                        let checkedStatus = event.target.checked;
                                        setData(
                                            allData.map(data => {
                                                if (item.id === data.id) {
                                                    data.isCreate = checkedStatus;
                                                }
                                                return data;
                                            })
                                        );
                                    }}
                                    type="checkbox"
                                    checked={item.isCreate}
                                />
                            </td>
                            <td>
                                <input
                                    onChange={event => {
                                        let checkedStatus = event.target.checked;
                                        setData(
                                            allData.map(data => {
                                                if (item.id === data.id) {
                                                    data.isView = checkedStatus;
                                                }
                                                return data;
                                            })
                                        );
                                    }}
                                    type="checkbox"
                                    checked={item.isView}
                                />
                            </td>
                            <td>
                                <input
                                    onChange={event => {
                                        let checkedStatus = event.target.checked;
                                        setData(
                                            allData.map(data => {
                                                if (item.id === data.id) {
                                                    data.isEdit = checkedStatus;
                                                }
                                                return data;
                                            })
                                        );
                                    }}
                                    type="checkbox"
                                    checked={item.isEdit}
                                />
                            </td>
                            <td>
                                <input
                                    onChange={event => {
                                        let checkedStatus = event.target.checked;
                                        setData(
                                            allData.map(data => {
                                                if (item.id === data.id) {
                                                    data.isDelete = checkedStatus;
                                                }
                                                return data;
                                            })
                                        );
                                    }}
                                    type="checkbox"
                                    checked={item.isDelete}
                                />
                            </td>
                            <td>
                                <input
                                    onChange={event => {
                                        let checkedStatus = event.target.checked;
                                        setData(
                                            allData.map(data => {
                                                if (item.id === data.id) {
                                                    data.isApprove = checkedStatus;
                                                }
                                                return data;
                                            })
                                        );
                                    }}
                                    type="checkbox"
                                    checked={item.isApprove}
                                />
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Dashboard;