import { useState } from "react"

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState(null)

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);

  }

  return (
   <div>
    <h1>Controll Component</h1>
    <form onSubmit={handlesubmit}>
      <table border={1}>
        <tr>
          <td>Name :-</td>
          <input type="text"onChange={(e)=>setName(e.target.value)} value={name} />
          <button>Submit</button>
        </tr>
       

      </table>
    </form>
   </div>
  )
}

export default App
