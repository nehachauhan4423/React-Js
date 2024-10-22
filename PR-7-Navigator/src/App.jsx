import { BrowserRouter,Route, Routes } from "react-router-dom"
import Table from "./Pages/Table";
import Form from "./Pages/Form";
import Edit from "./Pages/Edit";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./App.css";
function App() {
  return (
  <BrowserRouter>
  <Routes>
   <Route path="/" element={<Table/>}/>
   <Route path="/add" element={<Form/>}/>
   <Route path="/edit" element={<Edit/>}/>
  </Routes>
  </BrowserRouter>
  )
}
export default App
