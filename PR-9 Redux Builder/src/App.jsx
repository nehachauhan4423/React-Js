import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, deleteusers } from "./Redux/Action/NoteAction";
import { TiPlus } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const record = useSelector((state) => state.notes.users);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !note) {
      alert("WRITE NOTE..");
      return false;
    }

    let obj = {
      id: Math.floor(Math.random() * 10000),
      title,
      note,
    };

    dispatch(add(obj));
    setTitle("");
    setNote("");
    alert("NOTE ADDED");
  };
 
  return (
    <>
    <div className="main" style={{ backgroundColor: "#f7f9fc"}}>
      <div
        className="container"
        style={{
          textAlign: "center",
          padding: "20px",
         
          minHeight: "100vh",
        }}
      >
        <h1 style={{ color: "#5f6368", marginBottom: "20px" ,fontFamily:"serif"}}>Google Keep</h1>

        {/* Form Section */}
        <div className="form-main">
          <form
            className="card"
            onSubmit={handleSubmit}
            style={{
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              display: "inline-block",
              maxWidth: "300px",
              width: "100%",
              textAlign: "left",
            }}
          >
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <textarea
              placeholder="Write a note..."
              onChange={(e) => setNote(e.target.value)}
              value={note || ""}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                height: "100px",
                resize: "none",
              }}
            />
            <button
              className="addbtn"
              type="submit"
              style={{
                backgroundColor: "#4285f4",
                color: "#ffffff",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                marginTop: "10px",
                width: "100%",
                cursor: "pointer",
              }}
            >
              <TiPlus /> Add Note
            </button>
          </form>
        </div>

        {/* Notes Section */}
        <div
          className="small-note"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {record.map((val, index) => (
            <div
              key={index}
              className="note-card"
              style={{
                width: "250px",
                padding: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                backgroundColor: "#ffffff",
                textAlign: "left",
                position: "relative",
              }}
            >
              <h3 style={{ margin: "0 0 10px", fontSize: "16px", color: "#333",fontFamily:"sans-serif" }}>
                {val.title}
              </h3>
              <p style={{ margin: "0 0 10px", fontSize: "14px", color: "#555",fontFamily:"sans-serif" }}>
                {val.note}
              </p>
              <button
                onClick={() => dispatch(deleteusers(val.id))}
                style={{
                  backgroundColor: "#f44336",
                  color: "#ffffff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                }}
              >
                <MdDelete />
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
