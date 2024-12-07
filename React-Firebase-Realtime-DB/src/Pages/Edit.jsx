import { getDatabase, update, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { app } from "../firebase";

function Edit() {
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [editid, setEditId] = useState("");

    useEffect(() => {
        setEditId(location?.state[0]);
        setName(location?.state[1]?.name);
        setPhone(location?.state[1]?.phone);
    }, [location?.state]);

    const handleSubmit = (e) => {
        e.preventDefault(); // Corrected the method name
        const db = getDatabase(app);
        const user = ref(db, `users/${editid}`);
        
        update(user, {
            name: name,
            phone: phone
        })
        .then(() => {
            alert("Record updated successfully!"); // Feedback on success
            navigate(`/`);
        })
        .catch((error) => {
            console.error("Error updating record: ", error);
            alert("Failed to update record."); // Feedback on failure
        });
    };

    return (
        <>
            <div>
                <h2>Edit Record</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label> <br />
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} /> <br /><br />

                    <label htmlFor="phone">Phone:</label> <br />
                    <input type="number" onChange={(e) => setPhone(e.target.value)} value={phone} /> <br /><br />

                    <input type="submit" />
                </form>

                <Link to={`/`}>View</Link>
            </div>
        </>
    );
}

export default Edit;