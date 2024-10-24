import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [editId, setEditId] = useState('');

    const [allRecord, setAllRecord] = useState(
        localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
    );

    useEffect(() => {
        if (location?.state) {
            setName(location.state.name);
            setPhone(location.state.phone);
            setEditId(location.state.id);
        }
    }, [location?.state]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Update the specific record in the list
        let updatedRecords = allRecord.map((val) => {
            if (val.id === editId) {
                return { ...val, name: name, phone: phone };
            }
            return val;
        });

        // Update localStorage with the modified list
        localStorage.setItem('users', JSON.stringify(updatedRecords));

        alert('Record Updated');
        navigate('/');
    };

    return (
        <div align="center">
            <h2>EDIT USER REACT ROUTER</h2>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name :</td>
                            <td>
                                <input
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Phone :</td>
                            <td>
                                <input
                                    type="text"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="submit" value="Update" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <Link to={`/`}>View</Link>
        </div>
    );
};

export default Edit;
