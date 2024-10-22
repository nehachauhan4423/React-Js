import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Form.css";

const Form = () => {
    const navigate = useNavigate();
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");

    const [allrecord, setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: Math.floor(Math.random() * 100000),
            Title: Title,
            Description: Description,
            status: "active",
        };
        const newrecord = [...allrecord, obj];
        localStorage.setItem("users", JSON.stringify(newrecord));
        alert("RECORD ADDED");
        navigate('/');
    };

    return (
        <div align="center">
            <h2>ADD USER REACT ROUTER</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Title :-</td>
                        <td><input type="text" onChange={(e) => setTitle(e.target.value)} value={Title} /></td>
                    </tr>
                    <tr>
                        <td>Description :-</td>
                        <td><input type="text" onChange={(e) => setDescription(e.target.value)} value={Description} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" /></td>
                    </tr>
                </table>
            </form>
            <Link to={`/`}>View</Link>
        </div>
    );
};

export default Form;
