import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

import Inicio from './pages/inicio'
import Cuidadores from './pages/cuidadores'
import Perfil from './pages/perfil'
import Login from './pages/login'

function App() {
  return (
    <>
      <nav className='bg-pink-200 flex justify-around py-5'>
        <Link className='text-xl' to="/">Inicio</Link>
        <Link className='text-xl' to="/cuidadores">Cuidadores</Link>
        <Link className='text-xl' to="/perfil">Perfil</Link>
        <Link className='text-xl' to="/login">Login</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cuidadores" element={<Cuidadores />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App