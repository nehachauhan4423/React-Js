import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Edit.css'; // Ensure you have this CSS file for custom styles

const Edit = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');
    const [editId, setEditId] = useState('');
    const [designation, setDesignation] = useState('');
    const [salary, setSalary] = useState('');
    const [course, setCourse] = useState([]);
    const [cities, setCities] = useState([]); // Added cities state

    const [allRecord, setAllRecord] = useState(
        localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
    );

    useEffect(() => {
        if (location?.state) {
            setName(location.state.name);
            setEmail(location.state.email);
            setCourse(location.state.course || []);
            setDate(location.state.date);
            setDesignation(location.state.designation || '');
            setSalary(location.state.salary || '');
            setCities(location.state.cities || []); // Set cities from location state
            setEditId(location.state.id);
        }
    }, [location?.state]);

    const handleCityChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setCities((prevCities) => [...prevCities, value]);  // Add city if checked
        } else {
            setCities((prevCities) => prevCities.filter(city => city !== value));  // Remove city if unchecked
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Update record
        let updatedRecords = allRecord.map((val) => {
            if (val.id === editId) {
                return { ...val, name, email, cities, course, date, designation, salary };
            }
            return val;
        });

        // Update localStorage
        localStorage.setItem('users', JSON.stringify(updatedRecords));

        alert('Record Updated');
        navigate('/');
    };

    return (
        <div className="container py-5">
            <form onSubmit={handleSubmit} className="bg-light p-5 rounded shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5>Edit User</h5>
                    <Link to="/" className="btn btn-secondary">View Users</Link>
                </div>

                {/* Name Field */}
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Enter Your Name"
                    />
                </div>

                {/* Email Field */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Enter Your Email"
                    />
                </div>

                {/* Cities Checkbox Section */}
                <div className="mb-3">
                    <label className="form-label">Cities</label>
                    <div>
                        {['Ahemdabad', 'Rajkot', 'Surat', 'Gandhinagar', 'vadodara'].map((city) => (
                            <div key={city} className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={city}
                                    checked={cities.includes(city)} // Check if city is selected
                                    onChange={handleCityChange} // Handle checkbox change
                                />
                                <label className="form-check-label">{city}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Date Field */}
                <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                    />
                </div>

                {/* Designation Field */}
                <div className="mb-3">
                    <label className="form-label">Designation</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setDesignation(e.target.value)}
                        value={designation}
                        placeholder="Enter Employee Designation"
                    />
                </div>

                {/* Salary Field */}
                <div className="mb-3">
                    <label className="form-label">Salary</label>
                    <input
                        type="number"
                        className="form-control"
                        onChange={(e) => setSalary(e.target.value)}
                        value={salary}
                        placeholder="Enter Salary"
                    />
                </div>

                {/* Submit and Cancel Buttons */}
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">Update</button>
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="btn btn-danger"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Edit;
