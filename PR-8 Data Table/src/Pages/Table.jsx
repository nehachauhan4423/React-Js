import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import './Table.css';

const Table = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState("");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [filterData, setFilterData] = useState([]);
    const [mdelete, setMdelete] = useState([]);

    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const [record, setRecord] = useState(allUsers);

    const userDelete = (id) => {
        let updatedRecords = record.filter(val => val.id !== id);
        localStorage.setItem("users", JSON.stringify(updatedRecords));
        setRecord(updatedRecords);
        alert("Record Deleted");
    };

    const changeStatus = (id, st) => {
        const updatedRecords = record.map(val => {
            if (val.id === id) {
                val.status = st === "active" ? "deactive" : "active";
            }
            return val;
        });
        localStorage.setItem("users", JSON.stringify(updatedRecords));
        setRecord(updatedRecords);
        alert("Status Successfully Changed");
    };

    useEffect(() => {
        let filtered = [...allUsers];

        if (status !== "") {
            filtered = filtered.filter(val => val.status === status);
        }

        if (search !== "") {
            filtered = filtered.filter(value => value.name.toLowerCase().includes(search.toLowerCase()));
        }

        if (sort !== "") {
            filtered.sort((a, b) => {
                return sort === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            });
        }

        setFilterData(filtered);
    }, [status, search, sort, record]);

    const reset = () => {
        setFilterData(allUsers);
        setStatus("");
        setSearch("");
        setSort("");
    };

    const multipleDeleteRecord = (id, checked) => {
        let old = [...mdelete];
        if (checked) {
            old.push(id);
        } else {
            old = old.filter(val => val !== id);
        }
        setMdelete(old);
    };

    const multipleDelete = () => {
        let updatedRecords = record.filter(val => !mdelete.includes(val.id));
        localStorage.setItem("users", JSON.stringify(updatedRecords));
        setRecord(updatedRecords);
        alert("Records Deleted");
        setMdelete([]);
    };

    return (
        <div className="table-select">
            <h2>View Users</h2>

            <div className="select-setion">
                <select onChange={(e) => setStatus(e.target.value)} value={status}>
                    <option value="">----Select Status---</option>
                    <option value="active">Active</option>
                    <option value="deactive">Deactive</option>
                </select>

                <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search Here" />

                <select onChange={(e) => setSort(e.target.value)} value={sort}>
                    <option value="">----Select Sort---</option>
                    <option value="asc">A-Z</option>
                    <option value="dsc">Z-A</option>
                </select>

                <button onClick={reset}>Reset</button>
            </div>

            <table className="table-main">
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
                    {filterData.map((u, i) => {
                        const { id, name, email, gender, course, date, status } = u;
                        return (
                            <tr key={i}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{gender}</td>
                                <td>{course}</td>
                                <td>{date}</td>
                                <td>
                                    <button
                                        className={status === "active" ? "active" : "deactive"}
                                        onClick={() => changeStatus(id, status)}
                                    >
                                        {status}
                                    </button>
                                </td>
                                <td>
                                    <span onClick={() => userDelete(id)}>
                                        <MdDelete style={{ color: "teal", fontSize: "20px" }} />
                                    </span>&nbsp;&nbsp;&nbsp;
                                    <span onClick={() => navigate(`/edit`, { state: u })}>
                                        <FaEdit style={{ color: "darkblue", fontSize: "20px" }} />
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="table-add">
                <Link to={`/add`}>Add</Link>
            </div>
        </div>
    );
};

export default Table;
