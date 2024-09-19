import { useEffect, useState } from "react"

function App() {
  const [no, setNo] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setNo(no + 1);
    }, 1000)
  })

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setNo(number);
  //   },[])
  // })

  return (
   <div>
     <h1>{no}</h1>
   </div>
  )
}

export default App