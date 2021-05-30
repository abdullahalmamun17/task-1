import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import data from '../../data/data';
import ManageDashboard from '../ManageDashboard/ManageDashboard';

const Dashboard = () => {
    const [allData, setData] = useState(data)

    console.log(allData)
    const handleCheckbox = (e, id, actionName) => {
        const checkedStatus = e.target.checked;

        if (actionName === 'isCreate') {
            const newData = allData.map(data => {
                if (data.id === id) {
                    data.isCreate = checkedStatus;
                }
                return data;
            })
            setData(newData)
        }
        else if (actionName === 'isView') {
            const newData = allData.map(data => {
                if (data.id === id) {
                    data.isView = checkedStatus;
                }
                return data;
            })
            setData(newData)
        }
        else if (actionName === 'isEdit') {
            const newData = allData.map(data => {
                if (data.id === id) {
                    data.isEdit = checkedStatus;
                }
                return data;
            })
            setData(newData)
        }
        else if (actionName === 'isDelete') {
            const newData = allData.map(data => {
                if (data.id === id) {
                    data.isDelete = checkedStatus;
                }
                return data;
            })
            setData(newData)
        }
        else if (actionName === 'isApprove') {
            const newData = allData.map(data => {
                if (data.id === id) {
                    data.isApprove = checkedStatus;
                }
                return data;
            })
            setData(newData)
        }
    }

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
                        allData.map(item => <ManageDashboard key={item.id} data={item} handleCheckbox={handleCheckbox}></ManageDashboard>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Dashboard;