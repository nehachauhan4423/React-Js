import { useState } from "react"
import "./App.css"

function App() {

  const [cnt, setCnt] = useState(0)
  const inc = () => {
    setCnt(cnt + 1)
  }

  const dec = () => {
    setCnt(cnt - 1)
  }

  const ref = () => {
    setCnt(0)
  }
  // const ref = () => {
  //   setCnt(cnt == 1)
  // }

  return (
    <div align="center">
      <h1>Counter App</h1>
      <button onClick={() => inc()}>+</button>&nbsp;&nbsp;&nbsp;
      <button>{cnt}</button>&nbsp;&nbsp;
      {/* {
        cnt === 0 ? (
          <button disabled onClick={() => dec()}>-</button>
        ) : (
          <button onClick={() => dec()}>-</button>
        )
      } */}
       <button onClick={() => dec()}>-</button>
      <br></br> <br />
      &nbsp;<button onClick={() => ref()}>Reset</button>
    </div>
  )
}
export default App