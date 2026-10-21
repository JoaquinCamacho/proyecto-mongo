function authMiddleware(req, res, next) {
    const credencial = req.headers.authorization

    if (!credencial) {
        return res.status(401).json({
            error: 'No autorizado'
        })
    }

    next()
}

export default authMiddleware
