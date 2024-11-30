
import { BrowserRouter, Route, Router } from 'react-router';
import './App.css'
import Add from './Pages/Add'
import { Routes } from 'react-router';

function App() {

  return (
   <div>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Add />} />
    </Routes>
   </BrowserRouter>
   </div>
  )
}
export default App;
