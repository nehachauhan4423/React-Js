import React, { useState, useEffect } from 'react';
import "./App.css";
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

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('user')) || [];
    setRecod(savedTasks);
  }, []);

  const handlSubmit = (e) => {
    e.preventDefault();

    if (!date || !name || !task) {
      alert("PLEASE ADD NAME, DATE AND TASK..");
      return;
    }

    let obj = {
      id: edit ? edit : Math.floor(Math.random() * 10000),
      name: name,
      date: date,
      task: task,
    };

    if (edit) {
      let updatedRecords = recod.map((val) => val.id === edit ? obj : val);
      localStorage.setItem('user', JSON.stringify(updatedRecords));
      setRecod(updatedRecords);
      alert("RECORD UPDATED!");
    } else {
      let allRecords = [...recod, obj];
      localStorage.setItem('user', JSON.stringify(allRecords));
      setRecod(allRecords);
      alert("RECORD ADDED!");
    }

    setName("");
    setDate("");
    setTask("");
    setEdit("");
  };

  const handleDelete = (id) => {
    let filteredRecords = recod.filter((val) => val.id !== id);
    localStorage.setItem("user", JSON.stringify(filteredRecords));
    setRecod(filteredRecords);
    alert("RECORD DELETED!");
  };

  const handleEdit = (val) => {
    setName(val.name);
    setDate(val.date);
    setTask(val.task);
    setEdit(val.id);
  };

  const handleClear = () => {
    setName("");
    setDate("");
    setTask("");
    setEdit("");
  };

  return (
    <div>
      <div className="container text-center align-items-center">
        <div className="form-container">
          <div className="card" style={{ border: "white" }}>
            <h1>TODO APP</h1>
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
                &nbsp;<button type="submit" className="btn btn-primary">
                  {edit ? <FaEdit /> : <FaPlus />}
                </button>&nbsp;&nbsp;

                <button type="button" className="btn btn-secondary" onClick={handleClear}>
                  <MdDelete />
                </button>
              </div>
            </form>
          </div>

          <div className="input-list text-start">
            {recod.length > 0 ? (
              recod.map((val) => (
                <div className="input-card" key={val.id}>
                  <div className="input-details">
                    <h5>{val.name}</h5>
                    <h6>{val.date}</h6>
                    <p>{val.task}</p>
                    <div className="input-status text-center">
                      <button className="btn btn-edit" onClick={() => handleEdit(val)}>
                      <i>  <FaEdit /></i>
                      </button>
                      <button className="btn btn-delete" onClick={() => handleDelete(val.id)}>
                      <i>  <RiDeleteBin6Fill /></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="input-no">
                <p className="text-center">PLEASE ADD TASK..!!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
