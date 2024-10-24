import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState("");
    const [course, setCourse] = useState("");
    const [date, setDate] = useState("");
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

        // Update the specific record in the list
        let updatedRecords = allRecord.map((val) => {
            if (val.id === editId) {
                return { ...val, name: name, email: email, gender: gender, course: course, date: date };
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
                <table>
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
                            <td>Email :</td>
                            <td>
                                <input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </td>
                        </tr>
                        <tr>

                            Gender : <br /> <label><input
                                type="radio"
                                value="male"
                                checked={gender === "male"}
                                onChange={(e) => setGender(e.target.value)} />
                                Male
                            </label> <br />
                            <label>
                                <input
                                    type="radio"
                                    value="female"
                                    checked={gender === "female"}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                Female
                            </label>
                        </tr>

                        <tr>
                            <td>Course :</td>
                            <td>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="html"
                                        checked={course.includes('html')}
                                        onChange={handleCourseChange}
                                    />
                                    Html
                                </label> &nbsp;
                                <label>
                                    <input
                                        type="checkbox"
                                        value="css"
                                        checked={course.includes('css')}
                                        onChange={handleCourseChange}
                                    />
                                    CSS
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="BootStrap"
                                        checked={course.includes('BootStrap')}
                                        onChange={handleCourseChange}
                                    />
                                    BootStrap
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Js"
                                        checked={course.includes('Js')}
                                        onChange={handleCourseChange}
                                    />
                                    Js
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="React Js"
                                        checked={course.includes('React Js')}
                                        onChange={handleCourseChange}
                                    />
                                    React Js
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Node Js"
                                        checked={course.includes('Node Js')}
                                        onChange={handleCourseChange}
                                    />
                                    Node  Js
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="PHP"
                                        checked={course.includes('PHP')}
                                        onChange={handleCourseChange}
                                    />
                                    PHP
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Angular"
                                        checked={course.includes('Angular')}
                                        onChange={handleCourseChange}
                                    />
                                    Angular
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Phython"
                                        checked={course.includes('Phython')}
                                        onChange={handleCourseChange}
                                    />
                                    Phython
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Laravel"
                                        checked={course.includes('Laravel')}
                                        onChange={handleCourseChange}
                                    />
                                    Laravel
                                </label>
                            </td>
                        </tr>
                        <td>

                            <input type="date" name="" id=""onChange={(e) => setDate(e.target.value)}
                                    value={date} />

                        </td>
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
