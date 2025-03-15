import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import View from './Pages/View'
import Add from './Pages/Add'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
