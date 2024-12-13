import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Edit = () => {

    const [name,setName] = useState("");
    const [phone,setPhone]= useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=> {
        setName(location?.state?.name)
        setPhone(location?.state?.phone)
    },[location?.state])

    const handleSubmit = (e) => {
        e.preventDefalut();

        let obj = {
            id : location?.state?.id,
            name : name,
            phone : phone
        }
        dispatch(EditUser(obj))
        alert("Record Update")
        navigate('/')
    }

    return(
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Name :-</td>
                        <td>
                            <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                        </td>
                    </tr>
                    <tr>
                        <td>phone :-</td>
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
            <Link to={`/`}>View</Link>
        </div>
    )
}
export default Edit