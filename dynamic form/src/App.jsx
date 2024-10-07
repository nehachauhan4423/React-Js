import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [allRecord, setAllRecord] = useState([]);
  const [editId, setEditId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: Math.floor(Math.random() * 10000),
      name: name,
      phone: phone
    }

    if (editid) {
      let up = allRecord.map((val) => {
        if (val.id == editId) {
          val.name = name
          val.phone = phone
        }
        return val;
      })
      localStorage.setItem("users", JSON.stringify(up));
      alert("edited");
      setAllRecord(up);
      setName("");
      setPhone("");
      setEditId("");
    } else {
      let oldrecord = [...allRecord, obj];
      localStorage.setItem("users", JSON.stringify(oldrecord));
      alert("saved");
      setAllRecord(oldrecord);
      setName("");
      setPhone("");
    }
  }

  const userDelete = (id) => {
    let d = allRecord.filter(val => val.id != id);
    localStorage.setItem("users", JSON.stringify(d));
    alert("deleted");
    setAllRecord(d);
  }

  const userEdit = (id) => {
    let single = allRecord.find(val => val.id == id);
    setName(single.name);
    setPhone(single.phone);
    setEditId(id);
  }

  return (
    <div className="cotainer">
      <h2 className="mt-5" align="center">crud app</h2>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="card-header">
            add user
          </div>
          <form onSubmit={handleSubmit}>
            <div classname="mb-3">
              <label htmlfor="exampleInputEmail1" classname="form-label">Name</label>
              <input type="text" onChange={(e)=>setName(e.target)} />
            </div>
            <div classname="mb-3">
              <label htmlfor="exampleInputPassword1" classname="form-label">Phone</label>
              <input type="text" onChange={(e)=>setName(e.target)} />
            </div>
            <button type="submit" classname="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
