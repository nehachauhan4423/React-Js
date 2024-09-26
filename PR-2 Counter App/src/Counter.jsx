import React from 'react'
import "./App.css"
const Counter = ({no,plus,minus,reset}) =>{
    return(
        <div align="center">
            <h1>Counter App</h1>
            <button onClick={()=>plus()}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button>{no}</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>minus()}>-</button> <br /> <br />
            <button onClick={()=>reset()}>Reset  </button>
        </div>
    )
}
export default Counter