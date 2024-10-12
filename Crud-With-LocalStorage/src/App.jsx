import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react"

function App() {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const getRecord = () => {
    let all = localStorage.getItem("users")
    if (all) {
      return JSON.parse(localStorage.getItem("users"));
    } else {
      return [];
    }
  }

  const [allrecord, setAllRecord] = useState(getRecord());

  const handleSubmit = (e) => {
    e.preventDefault();


    let obj = {
      id: math.floor(Math.random() * 10000),
      name: name,
      phone: phone
    }

    let oldRecord = [...allrecord, obj];
    localStorage.setItem('users', JSON.stringify(oldRecord))
    setAllRecord(oldRecord)
    setName("")
    setPhone("")
  }

  return (
    <div className="container">
      <div className="mt-5" align="center">
        <div className="row-mt-5 d-flex">

          <div className="col-md-6">
            <div className="card">
              <div className="card-header">ADD USER</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div>
                      <div className="mb-3">
                          <label className="form-label">Name</label>
                            <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="form-control" placeholder="Enter Your Name"/>
                      </div>
                        <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} className="form-control" placeholder="Enter Your Phone"/>
                        </div>
                        <button type='submit' className='btn btn-secondary'>Add User</button>
                    </div>
                </form>
              </div>
            </div>
          </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-header">VIEW USER</div>
                <div className="card-body">
                  <table className='table'>
                      <thead>
                        <tr>
                          <th scope='col'>SrNO</th>
                          <th scope='col'>Name</th>
                          <th scope='col'>Phone</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          allrecord.map((val,i)=>{
                            return(
                              <tr key={++i}>
                                <th scope='row'>{++i}</th>
                                <td>{val.name}</td>
                                <td>{val.phone}</td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                  </table>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default App
