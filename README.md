API CERCA

API REST para gestionar cuidadores, desarrollada con Node.js, Express y MongoDB mediante Mongoose

-------------------------------------------------

INSTALACION
npm install
Crear un archivo .env tomando de ejemplo el archivo .env.ejemplo y configurar el PORT y la URI

----------------------------------------------

Ejecucion

npm start

para desarrollo:

npm run dev

---------------------------------------------
RUTAS

GET
/api/salud
Estado de la API

GET
/api/cuidadores
Listar y filtrar cuidadores

GET
/api/cuidadores/:id
Buscar por ID

POST
/api/cuidadores
Registrar cuidador

PATCH
/api/cuidadores/:id
Actualizar cuidador

DELETE
/api/cuidadores/:id
Eliminar cuidador

PATCH
/api/cuidadores/:id/ocupar
Ocupar cuidador

El registro tiene que tener una autorizacion para poder ingresar 

----------------------------------------------------------------

Errores

La API tiene respuestas 400, 401, 404, 409, 422 y 500 y cuando se elimina responde 204

----------------------------------------------------------------

Pruebas

Las pruebas estan hechas en la carpeta pruebas/cuidadores.http y usamos la extension Rest Client de VSCODE

--------------------------------------------------

Decisiones

1.Separamos en rutas,controladores,servicios y modelo
2.Validaciones de datos y manejo centralizado de errores
3.Busqueda de filtros opcionales

------------------------------------------------------------

Uso de IA

Se uso la IA para comprender algunos conceptos no claros en la consigna y resolver errores