import { useState } from "react"
import { Link } from "react-router-dom"
import './Register.css'

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [record, setRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            id: Math.floor(Math.random() * 10000),
            name: name,
            email: email,
            password: password
        }

        let old = [...record, obj];
        localStorage.setItem("users", JSON.stringify(old));
        alert("Record Add");
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
      <body>
        
        <div className="register-container">
        <h2>Register User</h2>
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="submit" value="Register" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>

        {/* <div className="link-container"> */}
            <Link to="/">Already have an account? Login</Link>
        {/* </div> */}
    </div>
      </body>
    )
}
export default Register