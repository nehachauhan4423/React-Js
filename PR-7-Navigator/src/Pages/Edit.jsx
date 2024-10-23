import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  } from "./Edit.css";

const Edit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [editId, setEditId] = useState("");
    const [allRecord, setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);


    useEffect(() => {
        if (location?.state) {
            setTitle(location.state.Title);
            setDescription(location.state.Description);
            setEditId(location.state.id);
        }
    }, [location]);


    const handleSubmit = (e) => {
        e.preventDefault();

        let updatedRecords = allRecord.map((record) => {
            if (record.id === editId) {
                return { ...record, Title, Description };
            }
            return record;
        });
        localStorage.setItem("users", JSON.stringify(updatedRecords));
        alert("RECORD UPDATED");
        navigate("/");
    };

    return (
        <div className="edit-form text-center">
            <h2>Edit User React Router</h2>
            <form onSubmit={handleSubmit}>
                <table className="table-edit">
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Input</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Title:</td>
                            <td>
                                <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} value={Title} />
                            </td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>
                                <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} value={Description} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <div className="update-button d-flex">
                                <input type="submit" value="Update Record" />&nbsp;&nbsp;&nbsp;
                                <div className="edit-button">
                                    <Link to="/">View</Link>
                                </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
           
        </div>
    );
};

export default Edit;
