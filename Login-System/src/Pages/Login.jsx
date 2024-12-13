import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    useEffect(() => {
        let userLogin = JSON.parse(localStorage.getItem("checkUser"));
        if (userLogin) {
            navigate("/add");
        }
    })

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [record, setRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

    const handleSubmit = (e) => {
        e.preventDefault();

        let checkUser = record.filter(
            (val) => val.email == email && val.password == password
        )

        if (checkUser.length == 0) {
            alert("Email And PassWord not Valid");
        }else{
            console.log(checkUser);
            localStorage.setItem('checkUser',JSON.stringify(checkUser[0]));
            alert("Successfully Login");
            navigate('/add')
            setEmail("");
            setPassword("");
        }
    }

    return (
        <div>
            <h2>Login User</h2>
            <form onSubmit={handleSubmit}>
                <table border={1} align="center">
                    <tr>
                        <td>Email :-</td>
                        <td>
                            <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Password :-</td>
                        <td>
                            <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" />
                        </td>
                    </tr>
                </table>
            </form>
            <Link to={`/register`}>Register</Link>
        </div>
    )
}
export default Login