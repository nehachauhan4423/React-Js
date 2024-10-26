import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { } from "./Form.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState([]);
    const [course, setCourse] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [allrecord, setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

    const handleCourseChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCourse([...course, value]);
        } else {
            setCourse(course.filter(cc => cc !== value))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !gender || !course || !date || !status) {
            alert("PLEASE ADD NAME,EMAIL,PASSWOR,GENDER,COURSE,DATE AND STATUS..");
            return;
        }

        let obj = {
            id: Math.floor(Math.random() * 100000),
            name: name,
            email: email,
            password: password,
            gender: gender,
            course: course,
            date: date,
            status: status,
            status: "active",
        };
        const newrecord = [...allrecord, obj];
        localStorage.setItem("users", JSON.stringify(newrecord));
        alert("RECORD ADDED");
        navigate('/');
    };



    return (
        <div className='react-router-form'>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-user">
                    <div className="form-header d-flex">
                        <h5>ADD USER</h5>
                        <div className="form-button">
                            <Link to={`/`}>View</Link>
                        </div>
                    </div>

                    <div className="form-con">
                        <div className="form-name-con">
                            Name : <br />
                            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Your Name' /> <br />

                            Email :<br />
                            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter Your Email' /> <br />

                            Password :<br />
                            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter Your Password' /> <br />
                        </div>

                        Gender : <br />
                        <label><input type="radio" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />&nbsp;Male</label> <br />
                        <label><input type="radio" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />&nbsp;Female</label> <br />

                        <div className="form-course-con">
                            <span>Course :</span> <br />
                            <label><input type="checkbox" value="html" onChange={handleCourseChange} /> Html</label>&nbsp;&nbsp;
                            <label><input type="checkbox" value="css" onChange={handleCourseChange} /> Css</label>&nbsp;&nbsp;
                            <label><input type="checkbox" value="Bootstrap" onChange={handleCourseChange} /> Bootstrap</label>&nbsp;&nbsp;
                            <label><input type="checkbox" value="Js" onChange={handleCourseChange} /> Js</label>&nbsp;&nbsp;
                            <label><input type="checkbox" value="React Js" onChange={handleCourseChange} /> React Js</label>&nbsp;&nbsp;
                            <label><input type="checkbox" value="Node Js" onChange={handleCourseChange} /> Node Js</label>&nbsp;&nbsp;
                            <label><input type="checkbox" value="PHP" onChange={handleCourseChange} /> PHP</label>&nbsp;&nbsp;
                            <label><input type="checkbox" value="Angular" onChange={handleCourseChange} /> Angular</label>&nbsp;&nbsp;
                            <label><input type="checkbox" value="Python" onChange={handleCourseChange} /> Python</label>&nbsp;&nbsp;
                            <label><input type="checkbox" value="Laravel" onChange={handleCourseChange} /> Laravel</label> <br />
                        </div>

                        <div className="form-date-con">
                            <span>Date :</span> <br /><input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
                        </div>

                        <div className="form-select-section">
                        <td>Select Status : <br /><select onChange={(e) => setStatus(e.target.value)} value={status}>
                            <option value="">----Select Status---</option> <br />
                            <option value="active">Active</option><br />
                            <option value="deactive">Deactive</option> <br />
                        </select></td>
                        </div>


                        <div className="form-submit">
                        <br />  <td><input type="SUBMIT" /></td>
                       
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};
// add user page 
export default Form;
