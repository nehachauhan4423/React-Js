import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
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
        .filter(user => user.name.toLowerCase().includes(searchTern.toLowerCase()) &&
            (filterStatus === "all" || (filterStatus === "active" ? user.status : !user.status))
        )
        .sort((a,b)=> {
            if (sortOrder === "asc") {
                return a.name.locale.Compare(b.name);
            }
            else{
                return b.name.locale.Compare(a.name);
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
                      //complate this code 
                    }
                </tbody>
            </table>

        </div>
    )

}
export default View;