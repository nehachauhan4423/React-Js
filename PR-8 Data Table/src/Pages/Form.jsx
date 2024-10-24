import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState([]);
    const [course, setCourse] = useState("");
    const [password, setPassword] = useState("");
    const [date,setDate] = useState("");
    const [allrecord, setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

    const handleCourseChange =(e)=> {
        const {value,checked} = e.target;
        if (checked) {
            setCourse([...course,value]);
        }else{
            setCourse(course.filter(cc => cc !== value))
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: Math.floor(Math.random() * 100000),
            name: name,
            email: email,
            password: password,
            gender: gender,
            course: course,
            date:date,
            status: "active",
        };
        const newrecord = [...allrecord, obj];
        localStorage.setItem("users", JSON.stringify(newrecord));
        alert("RECORD ADDED");
        navigate('/');
    };

    return (
        <div>
            <h2>ADD USER REACT ROUTER</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-user">
                    <div className="form-header d-flex">
                        <h5>ADD USER</h5>
                        <div className="form-button">
                            <Link to={`/`}>View</Link>
                        </div>
                    </div>
                    Name <br /><input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Your Name' /> <br />
                    Email <br /><input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter Your Email' /> <br />
                    Password <br /> <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter Your Password' /> <br />

                    Gender : <br /> <label><input
                        type="radio"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                    />
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
                    </label> <br />

                    Course: <br />
                    <label>
                        <input
                            type="checkbox" value="html"
                            onChange={handleCourseChange}
                        />
                       Html 
                    </label>&nbsp;&nbsp;
                    <label>
                        <input
                            type="checkbox" value="css"
                            onChange={handleCourseChange}
                        />
                       Css 
                    </label>
                    <label>&nbsp;&nbsp;
                        <input
                            type="checkbox" value="Bootstrap"
                            onChange={handleCourseChange}
                        />
                       BootStrap 
                    </label>
                    <label>&nbsp;&nbsp;
                        <input
                            type="checkbox" value="Js"
                            onChange={handleCourseChange}
                        />
                       Js 
                    </label>
                    <label>&nbsp;&nbsp;
                        <input
                            type="checkbox" value="React Js"
                            onChange={handleCourseChange}
                        />
                       React Js 
                    </label>
                    <label>&nbsp;&nbsp;
                        <input
                            type="checkbox" value="Node Js"
                            onChange={handleCourseChange}
                        />
                       Node Js 
                    </label>
                   
                    <label>&nbsp;&nbsp;
                        <input
                            type="checkbox" value="PHP"
                            onChange={handleCourseChange}
                        />
                       PHP 
                    </label>
                    
                    <label>&nbsp;&nbsp;
                        <input
                            type="checkbox" value="Angular"
                            onChange={handleCourseChange}
                        />
                       Angular
                    </label>

                    <label>&nbsp;&nbsp;
                        <input
                            type="checkbox" value="Phython"
                            onChange={handleCourseChange}
                        />
                       Phython
                    </label>

                    <label>&nbsp;&nbsp;
                        <input
                            type="checkbox" value="Laravel"
                            onChange={handleCourseChange}
                        />
                       Laravel
                    </label> <br />
                    
                Date : <br />
                <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>


                    <td> <select onChange={(e) => setStatus(e.target.value)} value={status}>
                        <option value="">----Select Status---</option>
                        <option value="active">Active</option>
                        <option value="deactive">Deactive</option>
                    </select></td>


                    <td><input type="submit" /></td>
                </div>
            </form>
        </div>
    );
};
// add user page 
export default Form;
