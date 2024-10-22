import { useState, useEffect }  from "react";
import { Link,useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {  } from "./Table.css";
// import "./Categories.css";

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
        setfilterData(filtered)
    }, [status,record])


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
        <div align="center" className="form-table">
            <h2>View User</h2>

            <br /><br />

            <table cellPadding={6}>
                <thead>
                    <tr>
                        <th><FaBook /></th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>
                        Action &nbsp;&nbsp;
                            <button onClick={()=>multipleDelete()}>D</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                      filterData.map((u,i)=>{
                        const {id,Title,Description,status} = u
                        return(
                            <tr key={i}>
                                <td>{<FaBook />}</td>
                                <td>{Title}</td>
                                <td>{Description}</td>
                                <td>
                                    <span onClick={()=>navigate(`/edit`,{state:u})}>
                                        <i><FaRegEdit  style={{ color:" #493b46",fontSize:"22px",marginBottom:"5px"}}/></i>
                                    </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type='checkbox' checked={mdelete.includes(id)} onChange={(e)=>multipleDeleteRecord(id,e.target.checked)}/>
                                </td>
                            </tr>
                        )
                      })
                    }
                </tbody>
            </table>
              <div className="button-link">
              <Link to={`/add`}>Add</Link> 
              </div>
        </div>
    )

}
export default Table