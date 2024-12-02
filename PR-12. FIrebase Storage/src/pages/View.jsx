import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoAddCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { deleteUser, viewUser } from '../Redux/Action/TodoAction';

const View = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(viewUser());
    }, [dispatch]);

    // Safeguard to ensure 'users' is always an array
    const users = useSelector(state =>  state.crud.user);

    const deleteRecord = (id) => {
        dispatch(deleteUser(id));
        alert("Record deleted Successfully...");
    };

    return (
        <div align="center">
            <header className='d-flex justify-content-between' style={{ backgroundColor: "#444444", padding: "10px", maxWidth: "924.66px", marginTop: "20px" }}>
                <div className="header align-items-center">
                    <div className="logo">
                        <h2 style={{ color: "#fff", fontSize: "30px" }}>Todo List</h2>
                    </div>
                </div>
                <div>
                    <Link to={`/`} className="btn justify-content-end" style={{ color: "#fff" }}>
                        <IoAddCircle style={{ fontSize: "40px" }} />
                    </Link>
                </div>
            </header>

            <div className="container">
                <div className="row mt-5 shadow rounded" style={{ backgroundColor: "rgb(244 246 246)", maxWidth: "924.66px", border: "0px solid #444444" }}>
                    {/* Now safely calling map */}
                    {users.map((val) => (
                        <div className="main-box d-flex align-items-center justify-content-around text-start p-3 border" key={val.id}>
                            <div className="col-8">
                                <div className="text-box" style={{ fontSize: "18px" }}>{val.name}</div>
                            </div>
                            <div className="col-4 d-flex justify-content-end">
                                <button onClick={() => deleteRecord(val.id)} className='btn' style={{ fontSize: "18px" }}>
                                    <MdDelete style={{ fontSize: "25px" }} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default View;
