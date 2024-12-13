import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function View(){
    const navigate = useNavigate()

    useEffect(()=> {
        let userLogin = JSON.parse(localStorage.getItem("checkUser"));
        if (!userLogin) {
            navigate("/")
        }
    })

    return(
      <div align="center">
        <h1>View User</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>SrNo</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {[].map((user,index)=> {
                    const {id,name,phone} = user;
                    return(
                        <tr key={id}>
                            <td>{index + 1}</td>
                            <td>{name}</td>
                            <td>{phone}</td>
                            <td>
                                <button onClick={()=>navigate("/edit",{state:user})}>Edit</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <Link to={`/add`}>Add</Link>
      </div>
    )
}
export default View;