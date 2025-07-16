import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Register  from './pages/Register'
import Login from './pages/Login'



function App() {
  

  return (

    <div>

    
  <Routes>
    <Route path="/" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/home" element={<Home/>} />
  </Routes>

  </div>
  );
}

export default App
