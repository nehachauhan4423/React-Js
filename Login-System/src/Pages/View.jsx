// import { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function View(){
//     const navigate = useNavigate()

//     useEffect(()=> {
//         let userLogin = JSON.parse(localStorage.getItem("checkUser"));
//         if (!userLogin) {
//             navigate("/")
//         }
//     })

//     return(
//       <div align="center">
//         <h1>View User</h1>
//         <table border={1}>
//             <thead>
//                 <tr>
//                     <th>SrNo</th>
//                     <th>Name</th>
//                     <th>Phone</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {[].map((user,index)=> {
//                     const {id,name,phone} = user;
//                     return(
//                         <tr key={id}>
//                             <td>{index + 1}</td>
//                             <td>{name}</td>
//                             <td>{phone}</td>
//                             <td>
//                                 <button onClick={()=>navigate("/edit",{state:user})}>Edit</button>
//                             </td>
//                         </tr>
//                     )
//                 })}
//             </tbody>
//         </table>
//         <Link to={`/add`}>Add</Link>
//       </div>
//     )
// }
// export default View;


import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const View = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        const userLogin = JSON.parse(localStorage.getItem("checkUser"));
        if (!userLogin) {
            navigate("/");
        }

        // Retrieve users from localStorage
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("checkUser");
        alert("User Logged Out");
        navigate("/");
    };

    return (
        <div align="center">
            <h2>User List</h2>
            {users.length > 0 ? (
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No records found</p>
            )}
            <Link to="/add">Add User</Link>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default View;
