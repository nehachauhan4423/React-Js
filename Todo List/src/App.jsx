import { useState } from "react"

function App() {
  const [task, setTask] = useState("");
  const [alltask, setAllTask] = useState([]);

  const hanndleSubmit = (e) => {
    e.preventDefault()

    let obj = {
      id: Math.floor(Math.random() * 10000),
      task: task,
      status: 'active'
    }
    let newRecord = [...alltask, obj];
    setAllTask(newRecord)
    setTask("")
  }
    const changeStatus = (id, st) => {
      if (st === "active") {
        let up = alltask.map((val) => {
          if (val.id == id) {
            val.status = "dective";
          }
          return val;
        })
        setAllTask(up);
        alert("STATUS SUCCESFULLY CHANGED");
      } else {
        let up = alltask.map((val) => {
          if (val.id == id) {
            val.status = "active";
          }
          return val;
        })
        setAllTask(up);
        alert("STATUS SUCCESFULLY CHANGED");
      }
    }
  

  return (
      <>
        <div align="center">
          <h2>Add Task</h2>
          <form onSubmit={hanndleSubmit}>
            Task: <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button type="submit">ADD</button>
          </form>

          <h2>View Task</h2>
          <table border={1}>
            <thead>
              <tr>
                <th>Srno</th>
                <th>Task</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {
                alltask.map((t,i)=>{
                  const {id,task,status} =t;
                  return(
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{task}</td>
                        <td>
                          {
                            status === "active" ? (
                              <button onClick={()=>changeStatus(id,status)} style={{backgroundColor:"green"}}>{status}</button>
                            ):(
                              <button onClick={()=>changeStatus(id,status)} style={{backgroundColor:"red"}}>{status}</button> 
                            )
                          }
                        </td>
                      </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </>
  )

}

export default App
