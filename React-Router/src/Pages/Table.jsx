import { useState, useEffect }  from "react";
import { Link,useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


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
        <div align="center">
            <h2>View User</h2>


            <select onChange={(e) => setStatus(e.target.value)} value={status}>
                <option value="">----Select Status---</option>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
            </select>


            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search Here" />

            <select onChange={(e) => setSort(e.target.value)} value={sort}>
                <option value="">----select sort---</option>
                <option value="asc">A-Z</option>
                <option value="dsc">Z-A</option>
            </select>

            <button onClick={() => reset()}>Reset</button>

            <br /><br />

            <table cellPadding={6} border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>
                            <button onClick={()=>multipleDelete()}>Delete</button>
                        </th>
                        <th>
                            <button onClick={()=>multipleStatus()}>Status</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                      filterData.map((u,i)=>{
                        const {id,name,phone,status} = u
                        return(
                            <tr key={i}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{phone}</td>
                                <td>
                                   {
                                     status == "active" ?(
                                        <button onClick={()=>changeStatus(id,status)} style={{backgroundColor:"green"}}>
                                            {status}
                                        </button>
                                    ):(
                                        <button onClick={()=>changeStatus(id,status)} style={{backgroundColor:"red"}}>
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
                                <td>
                                    <input type='checkbox' checked={mdelete.includes(id)} onChange={(e)=>multipleDeleteRecord(id,e.target.checked)}/>
                                </td>
                                <td>
                                    <input type='checkbox' />
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