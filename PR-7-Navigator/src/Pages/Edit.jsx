import React from 'react'
import { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Link,useLocation,useNavigate } from 'react-router-dom'

const Edit = () => {
    const location = useLocation();

    const navigate = useNavigate();

    const [Title,setTitle] = useState("")
    const [Description,setDescription] = useState("")
    const [editid,seEditId] = useState("")

    const [allrecord,setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")):[])

    useEffect(()=>{
        setTitle(localStorage?.state?.Title)
        setDescription(localStorage?.state?.Description)
        setEditId(localStorage?.state?.id)
    },[location?.state])

    const handleSubmit = (e) => {
        e.preventDefault();
        let up = allrecord.map((val,i)=>{
            if (val.id == editid) {
                val.Title = Title,
                val.Description = Description
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
                        Title :
                    </td>
                    <td>
                        <input type="text" onChange={(e)=>setTitle(e.target.value)} value={Title}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Description :
                    </td>
                    <td>
                        <input type="text" onChange={(e)=>setDescription(e.target.value)} value={Description}/>
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