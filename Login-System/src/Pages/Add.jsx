import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Add = () => {
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")

    const navigate = useNavigate()

    useEffect(()=> {
        let userLogin = JSON.parse(localStorage.getItem("checkUSer"));
        if (!userLogin) {
            navigate('/');
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        let obj ={
            id: Math.floor(Math.random()*10000),
            name : name,
            phone : phone
        }
        dispatch(AddUser(obj))
        alert("Record Add")
        navigate('/')
    }

    const handleLogout = () => {
        localStorage.removeItem("checkUser");
        alert("User Logout")
        navigate('/');
    }


    return(
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <table border={1} align="center">
                    <tr>
                        <td>Name:</td>
                        <td>
                            <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>
                            <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
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
            <Link to={`/View`}>View</Link>
            <button onClick={()=>handleLogout()}>Logout</button>
        </div>
    )
}

export default Add