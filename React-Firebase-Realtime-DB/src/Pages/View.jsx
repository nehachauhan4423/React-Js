// 
import { getDatabase, onValue, ref, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../firebase";
import './View.css'; // Import the CSS file

function View() {
    const navigate = useNavigate();
    const [record, setRecord] = useState({});

    const db = getDatabase(app);

    const viewData = () => {
        const users = ref(db, "users");

        onValue(users, (u) => {
            const data = u.val();
            setRecord(data || {});
        });
    };

    const deleteUser = (key) => {
        const userRef = ref(db, `users/${key}`);
        remove(userRef)
            .then(() => {
                alert("RECORD DELETE!");
            })
            .catch((error) => {
                console.error("Error deleting user: ", error);
                alert("Failed to delete user.");
            });
    };

    useEffect(() => {
        viewData();
    }, []);

    return (
        <div className="view-container" align="center">
            <h2>View User</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>SrNo</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.entries(record).map(([key, val], index) => (
                            <tr key={key}>
                                <td>{index + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.phone}</td>
                                <td>
                                    <button className="delete-button" onClick={() => deleteUser(key)}>Delete</button>
                                    <button className="edit-button" onClick={() => navigate(`/edit`, { state: [key, val] })}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to="/add" className="add-link">Add</Link>
        </div>
    );
}

export default View;
