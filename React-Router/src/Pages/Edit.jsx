import React from 'react'
import { useEffect,useState } from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom'

const Edit = () => {
    const location = useLocation();

    const navigate = useNavigate();

    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [editid,seEditId] = useState("")

    const [allrecord,setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")):[])

    useEffect(()=>{
        setName(localStorage?.state?.name)
        setPhone(localStorage?.state?.phone)
        setEditId(localStorage?.state?.id)
    },[location?.state])

    const handleSubmit = (e) => {
        e.preventDefault();
        let up = allrecord.map((val,i)=>{
            if (val.id == editid) {
                val.name = name,
                val.phone = phone
            }
            return val;
        })
        localStorage.setItem("users",JSON.stringify(up));
        alert("RECORD UPDATE")
        navigate("/")
    }

  return (
    <div align="center">
        <h2>EDIT USER REACT ROUTER</h2>
        <form onSubmit={handleSubmit}>
            <table border={1}>
                <tr>
                    <td>
                        Name :
                    </td>
                    <td>
                        <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Phone :
                    </td>
                    <td>
                        <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" /></td>
                </tr>
            </table>
        </form>
        <Link to={`/`}>View</Link>
    </div>
  )
}
export default Edit