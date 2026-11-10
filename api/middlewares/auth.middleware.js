import jwt from 'jsonwebtoken'

function authMiddleware(req, res, next) {
    const credencial = req.headers.authorization
    
    if (!credencial) {
        return res.status(401).json({
            error: 'No autorizado'
        })
    }
    
    const [tipo, token] = credencial.split(' ')

    if (tipo !== 'Bearer' || !token) {
        return res.status(401).json({
        error: 'Formato de autorización inválido'
    })
}

    try{
        const comprobar = jwt.verify(token, process.env.JWT_SECRET)
        req.usuario = comprobar
    }catch(error){
        return res.status(401).json({
            error:'Token invalidado o expirado'
        })
    }


    

    next()
}

export default authMiddleware
