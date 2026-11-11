import { useState } from "react"

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    async function manejarLogin(e) {
    e.preventDefault()

    setError('')

    try {
        const respuesta = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        const datos = await respuesta.json()

        if (!respuesta.ok) {
            throw new Error(datos.error || 'Error al iniciar sesión')
        }

        localStorage.setItem('token', datos.token)

        console.log('Login exitoso')

    } catch (error) {
        setError(error.message)
    }
}
    return (
        <main className="bg-cyan-100 min-h-screen flex justify-center items-center">

            <form className="bg-white p-8 rounded-xl shadow-md w-96" onSubmit={manejarLogin}>

                <h1 className="text-2xl font-bold text-center mb-6">
                    Iniciar sesión
                </h1>

                <div className="mb-4">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Ingresá tu email"
                        className="w-full border rounded-lg p-2"

                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        placeholder="Ingresá tu contraseña"
                        className="w-full border rounded-lg p-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-cyan-500 text-white p-2 rounded-lg"
                >
                    Ingresar
                </button>

            </form>

        </main>
    )
}

export default Login