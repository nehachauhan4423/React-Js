import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    
    const [allrecord, setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: Math.floor(Math.random() * 100000),
            name: name,
            phone: phone,
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
                        <td>Name :-</td>
                        <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} /></td>
                    </tr>
                    <tr>
                        <td>Phone :-</td>
                        <td><input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} /></td>
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
