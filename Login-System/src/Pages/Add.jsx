// // import { useEffect, useState } from "react"
// // import { Link, useNavigate } from "react-router-dom";
// // import { useDispatch } from "react-redux";

// // const Add = () => {

// //     const [name,setName] = useState("");
// //     const [phone,setPhone] = useState("")

// //     const navigate = useNavigate()

// //     useEffect(()=> {
// //         let userLogin = JSON.parse(localStorage.getItem("checkUser"))
// //         if (!userLogin) {
// //             navigate('/')
// //         }
// //     })

// //     const handleSubmit = (e) => {
// //         e.preventDefault();

// //         let obj = {
// //             id: Math.floor(Math.random() * 10000),
// //             name: name,
// //             phone:phone
// //         }
// //         // useDispatch(AddUser(obj));
// //         // alert("Record Add")
// //         // navigate('/')
// //         console.log(obj);
// //         navigate('/')

// //     }

// //     const handleLogout = () => {
// //         localStorage.removeItem("checkUser");
// //         alert("User Login")
// //         navigate('/')
// //     }

// //     return(
// //         <div align="center">
// //             <h2>Add User</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <table border={1}>
// //                     <tr>
// //                         <td>Name:-</td>
// //                         <td>
// //                             <input type="text" onChange={(e)=> setName(e.target.value)} value={name}/>
// //                         </td>
// //                     </tr>
// //                     <tr>
// //                         <td>Phone:-</td>
// //                         <td>
// //                             <input type="number" onChange={(e)=> setPhone(e.target.value)} value={phone}/>
// //                         </td>
// //                     </tr>
// //                     <tr>
// //                         <td></td>
// //                         <td>
// //                             <input type="submit" onck/>
// //                         </td>
// //                     </tr>
// //                 </table>
// //             </form>
// //             <Link to={`/view`}>View</Link> 
// //             <button onClick={()=>handleLogout()}>Logout</button>
// //         </div>
// //     )
// // }
// // export default Add


// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Add = () => {
//     const [name, setName] = useState("");
//     const [phone, setPhone] = useState("");

//     const navigate = useNavigate();

//     useEffect(() => {
//         let userLogin = JSON.parse(localStorage.getItem("checkUser"));
//         if (!userLogin) {
//             navigate("/");
//         }
//     }, [navigate]);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const obj = {
//             id: Math.floor(Math.random() * 10000),
//             name: name,
//             phone: phone,
//         };

//         // Retrieve existing records from localStorage
//         const existingRecords = JSON.parse(localStorage.getItem("users")) || [];
//         existingRecords.push(obj);

//         // Save updated records to localStorage
//         localStorage.setItem("users", JSON.stringify(existingRecords));
//         alert("Record Added");

//         // Reset form fields
//         setName("");
//         setPhone("");

//         // Navigate to the View page
//         navigate("/view");
//     };

//     const handleLogout = () => {
//         localStorage.removeItem("checkUser");
//         alert("User Logged Out");
//         navigate("/");
//     };

//     return (
//         <div align="center">
//             <h2>Add User</h2>
//             <form onSubmit={handleSubmit}>
//                 <table border={1}>
//                     <tbody>
//                         <tr>
//                             <td>Name:</td>
//                             <td>
//                                 <input
//                                     type="text"
//                                     onChange={(e) => setName(e.target.value)}
//                                     value={name}
//                                 />
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>Phone:</td>
//                             <td>
//                                 <input
//                                     type="number"
//                                     onChange={(e) => setPhone(e.target.value)}
//                                     value={phone}
//                                 />
//                             </td>
//                         </tr>
//                         <tr>
//                             <td colSpan={2}>
//                                 <button type="submit">Add</button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </form>
//             <Link to="/view">View</Link>
//             <button onClick={handleLogout}>Logout</button>
//         </div>
//     );
// };

// export default Add;
// chat gpt runnig 


import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        let userLogin = JSON.parse(localStorage.getItem("checkUser"));
        if (!userLogin) {
            navigate("/");
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = {
            id: Math.floor(Math.random() * 10000),
            name: name,
            phone: phone,
            city: city,
        };

        // Retrieve existing records from localStorage
        const existingRecords = JSON.parse(localStorage.getItem("users")) || [];
        existingRecords.push(obj);

        // Save updated records to localStorage
        localStorage.setItem("users", JSON.stringify(existingRecords));
        alert("Record Added");

        // Reset form fields
        setName("");
        setPhone("");
        setCity("");
        // Navigate to the View page
        navigate("/view");
    };

    const handleLogout = () => {
        localStorage.removeItem("checkUser");
        alert("User Logged Out");
        navigate("/");
    };

    return (
        <div align="center">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>
                                <input
                                    type="number"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>City:-</td>
                            <td>
                                <select onChange={(e) => setCity(e.target.value)} value={city}>
                                    <option value="">-- Select City --</option>
                                    <option value="Ahmedabad">Ahmedabad</option>
                                    <option value="Surat">Surat</option>
                                    <option value="Rajkot">Rajkot</option>
                                    <option value="Gandhinagar">Gandhinagar</option>

                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button type="submit">Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <Link to="/view">View</Link>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Add;
