import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./add.css"; 

const Add = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        let userLogin = JSON.parse(localStorage.getItem("checkUser"));
        if (!userLogin) {
            navigate("/");
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = {
            id: Math.floor(Math.random() * 10000),
            name: name,
            phone: phone,
        };

        const existingRecords = JSON.parse(localStorage.getItem("users")) || [];
        existingRecords.push(obj);
        localStorage.setItem("users", JSON.stringify(existingRecords));
        alert("Record Added");
        setName("");
        setPhone("");
        navigate("/view");
    };

    const handleLogout = () => {
        localStorage.removeItem("checkUser");
        alert("User Logged Out");
        navigate("/");
    };

    return (
        <div align="center">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>
                                <input
                                    type="number"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={2}>
                                <button type="submit">Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <Link to="/view">View</Link>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Add;