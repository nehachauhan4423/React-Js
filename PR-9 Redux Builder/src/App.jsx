import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import {add , delet} from "./Redux/Action/NoteAction";

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

    dispatch(add(obj))
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

          <div  className="justify-content-center">
            {
              record.map((item, index) => {
                return (
                  <div key={index} className="card">
                    <h2>{item.title}</h2>
                    <p>{item.note}</p>
                    </div>
                    )
                    })
            }
            
          </div>

        </div>
      </div>
    </>
  )
}

export default App
