# CERCA

Aplicación web para consultar y filtrar cuidadores por zona y especialidad.

## Tecnologías
- Backend: Node.js, Express, MongoDB y Mongoose.
- Frontend: React, Vite y Tailwind CSS.
- Autenticación: JWT.
- Seguridad: salt y scrypt.

## Instalación y ejecución

Backend

cd api
npm install

Crear .env a partir de .env.ejemplo y completar las variables de conexión a MongoDB, JWT y CORS.

Ejecutar la semilla:

node --env-file=.env scripts/seed.js

Iniciar la API:

npm run dev

Frontend: abrir otra terminal y ejecutar:

cd web
npm install
npm run dev

## Usuarios de prueba

- Admin: admin@example.com — Admin123
- Usuario común: usuario@example.com — Usuario123

## Rutas principales

Autenticación:
- POST `/api/auth/registro`
- POST `/api/auth/login`
- GET `/api/auth/perfil` (requiere token)

**Cuidadores:**
- GET `/api/cuidadores`
- GET `/api/cuidadores/:id`
- POST `/api/cuidadores`
- PATCH `/api/cuidadores/:id`
- PATCH `/api/cuidadores/:id/ocupar`
- DELETE `/api/cuidadores/:id` (solo admin)

## Pruebas

Se utiliza Thunder Client para probar registro, login, rutas protegidas, respuesta 401 sin token y respuesta 403 al intentar acceder como usuario común a una ruta de administrador.

## Seguridad

Las contraseñas se almacenan con salt y scrypt. No se devuelven en las respuestas. Las credenciales de MongoDB y el secreto JWT se guardan en `.env`, que no debe subirse al repositorio.

## Integrantes

Joaquin Camacho y Ezequiel Luna