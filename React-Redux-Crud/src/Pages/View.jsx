//slow error
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { DeleteUser, Status } from "../Redux/Action/CRudAction";

const View = () => {
    const navigate = useNavigate();
    const users = useSelector(state => state.crud.users);
    const dispatch = useDispatch();
    const [searchTern, setSearchTern] = useState("");
    const [filterStatus, setFilterStatus] = useState("all")
    const [sortOrder, setSortOrder] = useState("asc")


    const deleteUser = (id) => {
        dispatch(DeleteUser(id));
        alert("RECORD DELTED")
    }

    const UserStatus = (id, currentStatus) => {
        dispatch(Status(id));
        alert(currentStatus ? "Deactive successfully" : "Active successfully");
    }

    const filteredUsers = users
        .filter((user) => 
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterStatus === "all" || (filterStatus === "active" ? user.status : !user.status))
        )
        .sort((a,b)=> {
            if (sortOrder === "asc") {
                return a.name.localeCompare(b.name);
            }
            else{
                return b.name.localeCompare(a.name);
            }
        });
        console.log(searchTern);



    return (
        <div className="container">
            <h2>VIEW RECORD</h2>
            <div>

                <input type="text" placeholder="Search Name" onChange={(e) =>setSearchTern(e.target.value)} />

                <select onChange={(e) => setFilterStatus(e.target.value)} value={filterStatus}>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="deactive">DeActive</option>
                </select>

                <button onClick={()=>setSortOrder(sortOrder === "asc" ? "dsc" : "asc")}>
                    Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
                </button>
            </div>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      filteredUsers.map((u,i)=>(
                        <tr key={u.id}>
                            <td>{i+1}</td>
                            <td>{u.name}</td>
                            <td>{u.phone}</td>
                            <td>{u.status ? "Active" : "DeActive"}</td>
                            <td>
                                <button onClick={()=>deleteUser(u.id)}>Delete</button>
                                <button onClick={()=>navigate(`/edit`,{state:u.status})}>Edit</button>
                                <button onClick={()=>UserStatus(u.id,u.status)}>
                                    {u.status ? "Active" : "DeActive"}
                                </button>
                            </td>
                        </tr>
                      ))
                    }
                </tbody>
            </table>
                <Link to={`/add`}>Add</Link>
        </div>
    )

}
export default View;