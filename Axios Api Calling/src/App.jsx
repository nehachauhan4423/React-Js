import Axios  from 'axios'
import { useEffect } from 'react'

function App() {
    const get Products  = async () => {
      try{
        let response = await Axios.get(`https://api.example.com/products`);
      }
      catch(error){
        console.log(error)
        return false
      }
    }

    useEffect (() => {
      getProducts()
    },[])


  return (
   <h1>hiee</h1>
  )
}

export default App
