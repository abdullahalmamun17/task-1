import React from 'react';

const ManageDashboard = ({ data, handleCheckbox }) => {

    return (
        <tr key={data.id}>
            <td>{data.moduleName}</td>
            <td>{data.activityName}</td>
            <td>
                <input
                    onChange={(e) => handleCheckbox(e, data.id, 'isCreate')}
                    type="checkbox"
                    checked={data.isCreate}
                />
            </td>
            <td>
                <input
                    onChange={(e) => handleCheckbox(e, data.id, 'isView')}
                    type="checkbox"
                    checked={data.isView}
                />
            </td>
            <td>
                <input
                    onChange={(e) => handleCheckbox(e, data.id, 'isEdit')}
                    type="checkbox"
                    checked={data.isEdit}
                />
            </td>
            <td>
                <input
                    onChange={(e) => handleCheckbox(e, data.id, 'isDelete')}
                    type="checkbox"
                    checked={data.isDelete}
                />
            </td>
            <td>
                <input
                    onChange={(e) => handleCheckbox(e, data.id, 'isApprove')}
                    type="checkbox"
                    checked={data.isApprove}
                />
            </td>
        </tr>
    );
};

export default ManageDashboard;