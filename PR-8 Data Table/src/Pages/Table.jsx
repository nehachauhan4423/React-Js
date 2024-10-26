import { useState, useEffect }  from "react";
import { Link,useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {  } from "./Table.css";


const Table = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState("")
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    const [filterData, setfilterData] = useState([])
    const [mdelete,setMdelte] = useState([])


    const allusers = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []


    const [record, setRecord] = useState(allusers)


    const userDelete = (id) => {
        let d = record.filter(val => val.id != id);
        localStorage.setItem("users", JSON.stringify(d));
        setRecord(d);
        alert("RECORD DELETE");
    }


    const changeStatus = (id, st) => {
        if (st == "active") {
            let up = record.map((val, i) => {
                if (val.id == id) {
                    val.status = "deactive"
                }
                return val;
            })
            localStorage.setItem("users", JSON.stringify(up));
            setRecord(up);
            alert("STATUS SUCCESFULLY CHANGED");
        } else {
            let up = record.map((val, i) => {
                if (val.id == id) {
                    val.status = "active"
                }
                return val;
            })
            localStorage.setItem("users", JSON.stringify(up));
            setRecord(up);
            alert("STATUS SUCCESSFULLY CHANGED");

        }
    }


    useEffect(() => {
        let filtered = [...allusers]

        if (status != "") {
            filtered = filtered.filter(val => val.status == status);
        } else {
            setfilterData(allusers)
        }

        if (search !== "") {
            filtered = filtered.filter(value => value.name.toLowerCase().includes(search.toLowerCase()));
        }
        else {
            setfilterData(allusers)
        }

        if (sort != "") {
            filtered.sort((a, b) => {
                if (sort === "asc") {
                    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
                  } else if (sort === "dsc") {
                    return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
                  }
                
            });
        } else {
            setfilterData(allusers)
        }

        setfilterData(filtered)
    }, [status, search, sort,record])


    const reset = () => {
        setfilterData(allusers);
        setStatus("");
        setSearch("");
        setSort("");
    }


    const multipleDeleteRecord = (id,checked) => {
        let old = [...mdelete];
        if (checked) {
                old.push(id)
        }
        else{
            old = old.filter(val=>val != id)
        }
        setMdelte(old)
    }

    // multiple delete 
    const multipleDelete = () => {
        let d = record.filter(val =>!mdelete.includes(val.id));
        localStorage.setItem("users",JSON.stringify(d));
        setRecord(d)
        alert("RECORD DELETE");
        setMdelte([])
    }

    const multipleStatus = () => {
        alert("MULTIPLE STATUS HII")
    }


    return (
        <div align="center" className="table-select">
            <h2>View User</h2>


            <select onChange={(e) => setStatus(e.target.value)} value={status}>
                <option value="">----Select Status---</option>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
            </select>&nbsp;&nbsp;


            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search Here" />&nbsp;&nbsp;

            <select onChange={(e) => setSort(e.target.value)} value={sort}>
                <option value="">----select sort---</option>
                <option value="asc">A-Z</option>
                <option value="dsc">Z-A</option>
            </select>&nbsp;&nbsp;

            <button onClick={() => reset()}>Reset</button>

            <br /><br />

            <table cellPadding={10} className="table-main">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Course</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th> 
                    </tr>
                </thead>
                <tbody>
                    {
                      filterData.map((u,i)=>{
                        const {id,name,email,gender,course,date,status} = u
                        return(
                            <tr key={i}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{gender}</td>
                                <td>{course}</td>
                                <td>{date}</td>
                                <td>
                                   {
                                     status == "active" ?(
                                        <button onClick={()=>changeStatus(id,status)} style={{backgroundColor:"green",color:"white"}}>
                                            {status}
                                        </button>
                                    ):(
                                        <button onClick={()=>changeStatus(id,status)} style={{backgroundColor:"red",color:"white"}}>
                                            {status}
                                        </button>
                                    )
                                   }
                                </td>
                                <td>
                                    <span onClick={()=>userDelete(id)}>
                                        <i> <MdDelete style={{color:"orange"}} /></i>
                                    </span>&nbsp;&nbsp;&nbsp;
                                    <span onClick={()=>navigate(`/edit`,{state:u})}>
                                        <i><FaEdit style={{color:"blue"}}/></i>
                                    </span>
                                </td>
                            </tr>
                        )
                      })
                    }
                </tbody>
            </table>
               <Link to={`/add`}>Add</Link> 
        </div>
    )

}
export default Table