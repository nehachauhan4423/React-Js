import { useState } from "react"
import "./App.css" 

function App() {

  const [input,seInput] = useState([
    {name:'',phone:''},
  ])

  const addMore =() =>{
    let newField ={id:Math.random(Math.floor()*10000),name:"",phone:""}
    seInput([...input,newField])
  }
  const deleteRow = (id)=>{
    let d = input.filter(val=>val.id != id);
    seInput(d);
  }

  return (
    <div align="center">
      <h1>DYNAMIC FORM</h1>
      {
        input.map((item,index)=>{
          return(
            <div key={++index}>
              Name: <input type="text" value={item.name} /> &nbsp;&nbsp;
              Phone:  <input type="text " value={item.phone} />
              {
                 index === 0 ?(
                  " "
                ):(
                  <button onClick={()=>deleteRow(item.id)} className="btn btn-danger">x</button>
                )
              }
            </div>
          )
        })
      }
       &nbsp;  <br />
       <button onClick={()=>addMore()}>+</button>
    </div>
  )
}

export default App
