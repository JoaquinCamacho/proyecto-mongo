import { useEffect,useState } from 'react'
import CardCuidador from '../components/CardCuidador'


function Cuidadores() {

    const [cuidadores, setCuidadores] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error,setError] = useState('')
    const [zona,setZona] = useState('')
    const [especialidad,setEspecialidad] = useState('')
    const [filtros, setFiltros] = useState({
            zona: '',
            especialidad: ''
        })

    useEffect(()=>{

        async function obtenerCuidadores(){

            setCargando(true)
            setError('')

            try{
                const parametros = new URLSearchParams(filtros)

                const respuesta = await fetch(`http://localhost:3000/api/cuidadores?${parametros}`)
            
                if(!respuesta.ok){
                    throw new Error('Error al obtener cuidadores')
                }

                const datos = await respuesta.json()

                setCuidadores(datos.cuidadores)

            }catch(error){
                setError(error.message)
            }finally{
                setCargando(false)
            }
        }      

        obtenerCuidadores()

    },[filtros])

    if(cargando){
        return <p>Cargando...</p>
    }

    if(error){
        return <p>{error}</p>
    }

    function manejarFiltro(e) {
        e.preventDefault()

        setFiltros({
            zona: zona,
            especialidad: especialidad
        })
    }      



    return (
    <main className="bg-cyan-100 text-center h-screen">

        <h1 className='text-2xl py-5'>Listado de cuidadores</h1>

        <form className='p-4 bg-cyan-300 flex justify-center w-fit mx-auto my-5 rounded-xl' onSubmit={manejarFiltro}>
            <input
                type="text"
                placeholder="Buscar por zona"
                value={zona}
                onChange={(e) => setZona(e.target.value)}
            
                className='bg-cyan-400 rounded-lg p-2 mx-2'
            />

            <input
                type="text"
                placeholder="Buscar por especialidad"
                value={especialidad}
                onChange={(e) => setEspecialidad(e.target.value)}
            
                className='bg-cyan-400 rounded-lg p-2 mx-2'
            />

            <button className='px-4 py-2 mx-5 bg-cyan-500 rounded-lg' type="submit">Filtrar</button>
        </form>
    
    <div className='grid grid-cols-3 gap-5'>


        {cuidadores.map((cuidador) => (
            <CardCuidador
            key={cuidador.id}
            nombre={cuidador.nombre}
            especialidad={cuidador.especialidad}
            zona={cuidador.zona}
            />
        ))}

        </div>
    </main>
    )
}

export default Cuidadores