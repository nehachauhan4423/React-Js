import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Table from './Pages/Table'
import Form from './Pages/Form'
import Edit from './Pages/Edit'

function App() {

  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Table/>}/>
      <Route path='/add' element={<Form/>}/>
      <Route path='/edit' element={<Edit/>}/>
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
