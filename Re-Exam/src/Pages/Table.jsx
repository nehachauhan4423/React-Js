
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Table.css';

const Table = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState("");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [filterData, setfilterData] = useState([]);
    const [mdelete, setMdelete] = useState([]);

    const allusers = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    const [record, setRecord] = useState(allusers);

    const userDelete = (id) => {
        let updatedRecords = record.filter(val => val.id !== id);
        localStorage.setItem("users", JSON.stringify(updatedRecords));
        setRecord(updatedRecords);
        alert("Record Deleted");
    };

    const changeStatus = (id, st) => {
        const updatedRecords = record.map((val) => {
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
        let filtered = [...allusers];

        if (status) {
            filtered = filtered.filter(val => val.status === status);
        }

        if (search) {
            filtered = filtered.filter(val => val.name.toLowerCase().includes(search.toLowerCase()));
        }

        if (sort) {
            filtered.sort((a, b) => {
                if (sort === "asc") return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
                if (sort === "dsc") return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
                return 0;
            });
        }

        setfilterData(filtered);
    }, [status, search, sort, record]);

    const reset = () => {
        setfilterData(allusers);
        setStatus("");
        setSearch("");
        setSort("");
    };

    return (
        <div className="table-container">
            <h2 className="table-title">View Users</h2>
            <div className="filter-section">
                <select onChange={(e) => setStatus(e.target.value)} value={status} className="filter-dropdown">
                    <option value="">----Select Status----</option>
                    <option value="active">Active</option>
                    <option value="deactive">Deactive</option>
                </select>
                <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search Here" className="filter-search" />
                <select onChange={(e) => setSort(e.target.value)} value={sort} className="filter-dropdown">
                    <option value="">----Select Sort----</option>
                    <option value="asc">A-Z</option>
                    <option value="dsc">Z-A</option>
                </select>
                <button onClick={reset} className="reset-button">
                    Reset
                </button>
            </div>

            <table className="user-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Cities</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((u, i) => {
                        const { id, name, email, cities, date, status, designation, salary } = u;
                        return (
                            <tr key={i}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{cities ? cities.join(", ") : "N/A"}</td>
                                <td>{designation}</td>
                                <td>{salary}</td>
                                <td>{date}</td>
                                <td>
                                    <button
                                        onClick={() => changeStatus(id, status)}
                                        className={`status-button ${status === "active" ? "active" : "deactive"}`}
                                    >
                                        {status}
                                    </button>
                                </td>
                                <td className="actions">
                                    <span onClick={() => userDelete(id)} className="action-icon delete">
                                        <i className="fa fa-trash"></i> Delete
                                    </span>
                                    <span onClick={() => navigate(`/edit`, { state: u })} className="action-icon edit">
                                        <i className="fa fa-edit"></i> Edit
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="add-user-button">
                <Link to={`/add`} className="add-button">
                    Add New User
                </Link>
            </div>
        </div>
    );
};

export default Table;

