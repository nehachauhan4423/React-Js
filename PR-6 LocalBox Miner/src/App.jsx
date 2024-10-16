import React from 'react'
import "./App.css";
import { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [task, setTask] = useState("");
  const [edit, setEdit] = useState("");
  const [recod, setRecod] = useState([]);

  const handlSubmit = (e) => {
    e.preventDefault();

    if (!date || !name || !task) {
      alert("PLEASE ADD NAME,DATE AND TASK..");
      return;
    }
    let obj = {
      id: edit ? edit : Math.floor(Math.random() * 10000),
      name: name,
      date: date,
      task: task,
    };


    if (edit) {
      let updateRecords = recod.map((val) => val.id === edit ? obj : val);
      localStorage.setItem('user', JSON.stringify(updateRecords));
      setRecod(updateRecords);
      alert("RECORD UPDATE..!");
    }
    else {
      let allRecord = [...recod, obj];
      localStorage.setItem("user", JSON.stringify(allRecord));
      setRecod(allRecord);
      alert("RECORD ADD..!");
    }


    setName("");
    setDate("");
    setTask("");
    seteditId("");
  }

  const handleDelete = (id) => {
    let filterRecord = recod.filter((val) => val.id !== id);
    localStorage.setItem("user", JSON.stringify(filterRecord))
    setRecod(filterRecord);
    alert("RECORD DELETE..!")
  }

  const handleEdit = (val) => {
    setName(val.name);
    setDate(val.date);
    setTask(val.task);
    seteditId(val.id);
  }

  const handleClear = () => {
    setName("");
    setDate("");
    setTask("");
    setedit("");
  }

  return (
    <div>
      <div className="container text-center align-items-center">


        <div className="form-container">
          <div className="card" style={{border:"white"}}>
            <h1>TODO APP</h1>
            {/* <h4>ADD TASK</h4> */}
            <form onSubmit={handlSubmit}>

              <div className="input-form">
                <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} value={name} />
              </div>

              <div className="input-form">
                <input type="date" placeholder='Enter Date' onChange={(e) => setDate(e.target.value)} value={date} />
              </div>

              <div className="input-form">
                <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} value={task} />
              </div>

              <div className="button-group">

                &nbsp;<button type="submit" className="btn-primary" style={{backgroundColor:''}}>
                  {edit ? 'Update Task':<i><FaPlus /></i>}
                </button>&nbsp;&nbsp;

                <button type="button" className='btn-secondary' onClick={handleClear}>
                <MdDelete />
                </button>

              </div>
            </form>
          </div>


          <div className="input-list text-start">
            {recod.length > 0 ? (
              recod.map((val) => (
                <div className="input-card" key={val.id}>
                  <div className="input-details" >
                    <h5>{val.name}</h5>
                    <h6>{val.date}</h6>
                    <p>{val.task}</p>
                    <div className="input-status text-center">
                      <button className="btn-edit" onClick={() => handleEdit(val)}>
                      <i><FaEdit /></i>
                      </button>
                      <button className="btn-delete" onClick={() => handleDelete(val.id)}>
                      <i><RiDeleteBin6Fill /></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="input-no">
                <p className='text-center'>PLEASE ADD TASK..!!</p>
              </div>
            )
            }
          </div>
        </div>


      </div>
    </div>
  )
}

export default App