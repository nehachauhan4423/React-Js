import { useState } from "react"

const Add = () => {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const db = getDatabase(app);

    const handleSubmit = (e) => {
        e.preventDefault();
        let id = Math.floor(Math.random() * 10000);
        set (ref(db,`users/${id}`),{
            name:name,
            phone:phone
        });
        alert("RECORD ADD");
        setName("");
        setPhone("");
    };


    return (
        <div>
            <h2>Add user</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Name :</td>
                        <td>
                            <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Phone :</td>
                        <td>
                            <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit">Submit</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )




}
export default Add