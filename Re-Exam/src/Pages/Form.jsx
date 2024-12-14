import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Form.css';

const Form = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [designation, setDesignation] = useState("");
    const [salary, setSalary] = useState("");
    const [city, setCity] = useState("");
    const [allrecord, setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all required fields are filled out
        if (!name || !email || !password || !date || !status || !designation || !salary || !city) {
            alert("Please fill all fields.");
            return;
        }

        // Create user object
        let obj = {
            id: Math.floor(Math.random() * 100000),
            name: name,
            email: email,
            password: password,
            status: status,
            designation: designation,
            salary: salary,
            date: date,
            city: city
        };

        // Save the new record to localStorage
        const newRecord = [...allrecord, obj];
        localStorage.setItem("users", JSON.stringify(newRecord));

        alert("Record Added");
        navigate('/'); // Navigate to the desired page
    };

    return (
        <div className="react-router-form">
            <form onSubmit={handleSubmit}>
                <div className="form-header d-flex">
                    <h5>ADD USER</h5>
                    <div className="form-button">
                        <Link to="/">View</Link>
                    </div>
                </div>

                <div className="form-con">
                    <div className="form-name-con">
                        <label>Name :</label>
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder="Enter Your Name"
                        />

                        <label>Email :</label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Enter Your Email"
                        />

                        <label>Password :</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder="Enter Your Password"
                        />
                    </div>

                    <div className="form-date-con">
                        <label>Date :</label>
                        <input
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                        />
                    </div>

                    <div className="form-select-section">
                        <label>Select Status :</label>
                        <select
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
                        >
                            <option value="">----Select Status----</option>
                            <option value="active">Active</option>
                            <option value="deactive">Deactive</option>
                        </select>
                    </div>

                    <div className="form-designation">
                        <label>Employee Designation :</label>
                        <input
                            type="text"
                            onChange={(e) => setDesignation(e.target.value)}
                            value={designation}
                            placeholder="Enter Employee Designation"
                        />
                    </div>

                    <div className="form-salary">
                        <label>Salary :</label>
                        <input
                            type="number"
                            onChange={(e) => setSalary(e.target.value)}
                            value={salary}
                            placeholder="Enter Salary"
                        />
                    </div>

                    <div className="form-city">
                        <label>City :</label>
                        <input
                            type="text"
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                            placeholder="Enter City"
                        />
                    </div>

                    <div className="form-submit">
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
