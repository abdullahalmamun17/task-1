import React from 'react';
import { useForm } from 'react-hook-form';
import './User.css';

const User = ({ handleUserData, error }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        handleUserData(data)
        e.target.reset();
    };

    return (
        // User input form
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-center align-items-end mt-4">
                <div className="mr-3">
                    <label className="d-block m-0">Name</label>
                    <input type="text" className="form-control" {...register("name", { required: true })} required />
                </div>
                <div className="mr-3">
                    <label className="d-block m-0">Email</label>
                    <input className="form-control" type="email" {...register("email", { required: true })} required />
                </div>
                <input type="submit" value="ADD" className="btn btn-primary" />
            </div>
            <p className="text-danger text-center mt-2">{error}</p>
        </form>
    );
};

export default User;