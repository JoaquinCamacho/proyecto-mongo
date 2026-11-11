import { useEffect, useState } from 'react'

function Perfil() {

    const [usuario, setUsuario] = useState(null)
    const [cargando, setCargando] = useState(true)


    useEffect(() => {

    const token = localStorage.getItem('token')

    async function obtenerPerfil() {

        const respuesta = await fetch('http://localhost:3000/api/auth/perfil', {
    headers: {
        Authorization: `Bearer ${token}`
    }})

        if (!respuesta.ok) {
            throw new Error('No se pudo obtener el perfil')
        }

        const datos = await respuesta.json()
        setUsuario(datos.usuario)
        setCargando(false)

    }

    obtenerPerfil()
    }, [])

    if (cargando) {
        return <p>Cargando perfil...</p>
    }

  return (
    <div className="bg-cyan-100 min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-xl shadow-md w-96">
            <h1 className="text-2xl font-bold mb-5">
                Mi perfil
            </h1>

            <p>Nombre: {usuario.nombre}</p>
            <p>Email: {usuario.email}</p>
            <p>Rol: {usuario.rol}</p>
        </div>
    </div>
)
}

export default Perfil