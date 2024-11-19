import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import {adduser,deleteuser} from "./Redux/Action/NoteAction"

function App() {

  const [title, setTitle] = useState("")
  const[note, setNote] = useState("")

  const record = useSelector(state => state.notes.users)

  const dispatch = useDispatch()

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!title || !note) {
      alert("WRITE NOTE..")
      return false;
    }

    let obj = {
      id: Math.floor(Math.random() * 10000),
      title,
      note
    }

    dispatch(addeduser(obj))
    setTitle("")
    setNote("")
    alert("Note add ")
  }

  return (
    <>
      <div className="container">
        <div className="row">


          <div className="form-main">
            <form className="card" onSubmit={handelSubmit}>
              <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title || ""} />
              <textarea rows={4} placeholder="Write a note.." onChange={(e) => setNote(e.target.value)} value={note || ""}></textarea>
              <button className="addbtn" type="submit">
                submit
              </button>
            </form>
          </div>

          <div className="justift-content-center">
            <h5>{val.title}</h5>
            <p>{val.note}</p>
            <div className="deletbtn">
              <button className="btn btn-danger" onClick={() => dispatch(deleteduser(val.id))}></button>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
