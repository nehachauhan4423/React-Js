import { useState } from "react"
import { getDatabase, ref,set } from "firebase/database";
import {Link} from "react-router-dom";
import { app } from "../firebase";


function Add()  {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const db = getDatabase(app)
        let id = Math.floor(Math.random() * 1000000);
        set(ref(db, `users/${id}`), {
            name: name,
            phone: phone
        })
    }
    return (
        <>
            <div>
                <h2>Add Record</h2>
                    <form onSubmit={handleSubmit}>

                        <label htmlFor="name" >Name:</label>
                        <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/> <br />

                        <label htmlFor="phone" >Phone:</label>
                        <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone}/> <br />

                        <input type="submit"/>

                    </form>
                    <Link to={`/`}></Link>
            </div>
        </>
    )
}
export default Add