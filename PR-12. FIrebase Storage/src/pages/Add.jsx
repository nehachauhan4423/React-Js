import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link,useNavigate } from "react-router-dom"
import { addUser } from "../Redux/Action/TodoAction"

const Add = () => {
  const dispatch = useDispatch("")
  const navigate = useNavigate("")

  const [name,setName] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault()
      let obj = {
        name : name,
      }
      dispatch(addUser(obj))
      alert("RECORD ADDED");
      navigate("/")
      setTodo("")
    }

    return(
      <div className="container">
        <h1>TODO APP</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
          <button type="submit">ADD</button>
          <Link to={`/view`}></Link>
        </form>
      </div>
    )

}
  
export default Add;