import { BrowserRouter,Route, Routes } from "react-router-dom"
import Table from "./Pages/Table";
import Form from "./Pages/Form";
import Edit from "./Pages/Edit";


function App() {
  return (
  <BrowserRouter>
  <Routes>
   <Route path="/" element={<Table/>}/>
   <Route path="/add" element={<Form/>}/>
   <Route path="/edit" element={<Form/>}/>
  </Routes>
  </BrowserRouter>
  )
}
export default App
