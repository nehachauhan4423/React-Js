import { useDispatch, useSelector } from "react-redux"
import { Decrement, Increment, Reset } from "./Redux/Action/CounterAction"

function App() {
  const dispatch = useDispatch()
  const no = useSelector(state => state.cnt)  

  return(
    <>
      <div align="center"> 
          <h1>COUNTER APP</h1>
          <h2>Count : {no}</h2>
          <button onClick={()=> dispatch(Increment())}>+</button>
          <button onClick={()=> dispatch(Decrement())}>-</button>
          <button onClick={()=> dispatch(Reset())}>R</button>
      </div>
    </>
  )
}

export default App
