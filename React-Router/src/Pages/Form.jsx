const { useState } = require("react");
const { useNavigate } = require("react-router-dom")

const from = () =>{
    const navigate = useNavigate();
    const [name,SetName] = useState("")
    const [phone,setPhone] = useState("")

    const [allrecord,setAllRecord] = useState(localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")):[])

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: Math.floor(Math.random() * 100000),
            name :name,
            phone : phone,
            status : "active"
        }
        const newrecord = [...allrecord,obj];
        localStorage.setItem("users",JSON.stringify(newrecord));
        alert("ADD RECORD");
        navigate('/');
    }
    return(
        <div align="center">
            <h2>ADD USER REACT ROUTER</h2>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tr>
                        <td>Name:</td>
                        <td>
                         <input type="text" onChange={(e)=>SetName(e.target.value)} value={name}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>
                         <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}