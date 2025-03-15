import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./view.css"; 

function View() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let userLogin = JSON.parse(localStorage.getItem("checkUser"));
        if (!userLogin) {
            navigate("/");
        }
        const storeUser = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storeUser);
    }, []);

    const Delete = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    return (
     <body>
        
        <div className="view-container">
            <h1>View Users</h1>
            
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user, index) => {
                                const { id, name, phone } = user;
                                return (
                                    <tr key={id}>
                                        <td>{index + 1}</td>
                                        <td>{name}</td>
                                        <td>{phone}</td>
                                        <td>
                                            <button 
                                                onClick={() => Delete(id)}
                                                className="delete-btn"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="4">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Link to="/add" className="add-btn">Add New User</Link>
        </div>
     </body>
    );
}

export default View;
