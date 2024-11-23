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
        };
        const newrecord = [...allrecord, obj];
        localStorage.setItem("users", JSON.stringify(newrecord));
        alert("RECORD ADDED");
        navigate('/');
    };

    return (
        <div align="center" className="add-task text-center">
            <h1>ROUTER CRUD </h1>
            <form onSubmit={handleSubmit} className="form-form">
                <table className="form-table2">
                    <tr>
                        <td style={{ fontSize: "20px", fontFamily: "sans-serif", fontWeight: "800", fontFamily: "Georgia, 'Times New Roman', Times, serif", textAlign: "start", paddingLeft: "10px" }}>Title</td>
                        <td><input type="text" onChange={(e) => setTitle(e.target.value)} value={Title} /></td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: "20px", fontFamily: "sans-serif", fontWeight: "800", fontFamily: "Georgia, 'Times New Roman', Times, serif", textAlign: "start" }}>Description</td>
                        <td><input type="text" onChange={(e) => setDescription(e.target.value)} value={Description} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><div className="form-submit text-start">
                            <input type="submit"  style={{width:"100px",marginBottom:"10px"}}/></div></td>
                            
                    </tr>
                </table>
            </form>
            <div className="form-table-button">
                            <Link to={`/`}>View</Link>
                            </div>
        </div>
    );
};

export default Form;
