import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { } from "./Edit.css";

const Edit = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState("");
    const [course, setCourse] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [editId, setEditId] = useState('');

    const [allRecord, setAllRecord] = useState(
        localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
    );

    useEffect(() => {
        if (location?.state) {
            setName(location.state.name);
            setEmail(location.state.email);
            setGender(location.state.gender);
            setCourse(location.state.course || []);
            setDate(location.state.date);
            setEditId(location.state.id);
        }
    }, [location?.state]);

    const handleCourseChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCourse([...course, value]); // Add course to the list
        } else {
            setCourse(course.filter(c => c !== value)); // Remove course from the list
        }
    };




    const handleSubmit = (e) => {
        e.preventDefault();

        // Update record 
        let updatedRecords = allRecord.map((val) => {
            if (val.id === editId) {
                return { ...val, name: name, email: email, gender: gender, course: course, date: date };
            }
            return val;
        });

        // Update localStorage
        localStorage.setItem('users', JSON.stringify(updatedRecords));

        alert('Record Updated');
        navigate('/');
    };

    return (
        <div className='react-router-edit'>
            <form onSubmit={handleSubmit}>
                <div className="edit-user">
                    <div className="edit-header d-flex">
                        <h5>ADD USER</h5>
                        <div className="edit-button">
                            <Link to={`/`}>View</Link>
                        </div>
                    </div>

                    <div className="edit-con">

                        <div className="edit-name-con">
                            Name :<input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                            Email :<input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>

                        Gender : <br /> <label><input type="radio" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />Male</label> <br />
                        <label><input type="radio" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />Female</label> <br />

                        <div className="edit-course-con">
                            Course : <br />
                            <label><input type="checkbox" value="html" checked={course.includes('html')} onChange={handleCourseChange} />&nbsp;Html</label> &nbsp;
                            <label><input type="checkbox" value="css" checked={course.includes('css')} onChange={handleCourseChange} />&nbsp;CSS </label>&nbsp;
                            <label><input type="checkbox" value="BootStrap" checked={course.includes('BootStrap')} onChange={handleCourseChange} />&nbsp;BootStrap</label>&nbsp;
                            <label><input type="checkbox" value="Js" checked={course.includes('Js')} onChange={handleCourseChange} />&nbsp;Js</label>&nbsp;
                            <label><input type="checkbox" value="React Js" checked={course.includes('React Js')} onChange={handleCourseChange} />&nbsp;React Js</label>&nbsp;
                            <label><input type="checkbox" value="Node Js" checked={course.includes('Node Js')} onChange={handleCourseChange} />&nbsp;Node  Js</label>&nbsp;
                            <label><input type="checkbox" value="PHP" checked={course.includes('PHP')} onChange={handleCourseChange} />&nbsp;PHP</label>&nbsp;
                            <label><input type="checkbox" value="Angular" checked={course.includes('Angular')} onChange={handleCourseChange} />&nbsp;Angular</label>&nbsp;
                            <label><input type="checkbox" value="Phython" checked={course.includes('Phython')} onChange={handleCourseChange} />&nbsp;Phython</label>&nbsp;
                            <label><input type="checkbox" value="Laravel" checked={course.includes('Laravel')} onChange={handleCourseChange} />&nbsp;Laravel</label> <br />
                        </div>


                        <div className="edit-date-con">
                            Date : <br /><input type="date" name="" id="" onChange={(e) => setDate(e.target.value)}
                                value={date} />
                        </div>
                            
                        <div className="edit-update-button d-flex">
                            <input type="submit" value="Update" />
                        </div>

                    </div>
                </div>
            </form>

        </div>
    );
};

export default Edit;
