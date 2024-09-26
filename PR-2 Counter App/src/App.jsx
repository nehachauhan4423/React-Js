import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {useState} from "react";
import "./App.css" 
import Counter from "./Counter"

function App() {

  const [no,setNo] = useState(0);

  const Increment = () =>{
    setNo(no +1)
  }
  const Decrement = () =>{
    setNo(no-1)
  }

  const Reset = () =>{
    setNo(0)
  }

  return (
   <Counter
    no = {no}
    plus = {Increment}
    minus = {Decrement}
    reset = {Reset}
   />
  )
}

export default App
 