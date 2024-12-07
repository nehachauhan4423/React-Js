import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { Link } from "react-router-dom";
import { app } from "../firebase";
import './Add.css'; 

function Add() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const db = getDatabase(app);
        const id = Math.floor(Math.random() * 1000000); // Generate a random ID

        try {
            // Set the data in the database
            await set(ref(db, `users/${id}`), {
                name: name,
                phone: phone,
            });
            alert("Record added successfully!");
        } catch (error) {
            console.error("Error adding record: ", error);
            alert("Failed to add record.");
        }

        // Clear the input fields
        setName("");
        setPhone("");
    };

    return (
        <div align="center">
            <h2>Add Record</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required // Make the field required
                />
                <br />

                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    required // Make the field required
                />
                <br />

                <input type="submit" value="Submit" />
            </form>
            <Link to={`/`}>View</Link>
        </div>
    );
}

export default Add;