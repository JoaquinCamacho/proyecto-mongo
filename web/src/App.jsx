import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

import Inicio from './pages/inicio'
import Cuidadores from './pages/cuidadores'
import Perfil from './pages/perfil'

function App() {
  return (
    <>
      <nav className='bg-pink-200 flex justify-around py-5'>
        <Link className='text-xl' to="/">Inicio</Link>
        <Link className='text-xl' to="/cuidadores">Cuidadores</Link>
        <Link className='text-xl' to="/perfil">Perfil</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cuidadores" element={<Cuidadores />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </>
  )
}

export default App