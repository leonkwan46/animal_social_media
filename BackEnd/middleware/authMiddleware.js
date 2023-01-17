const  authenticateToken = (req, res, next) => {
    const authHeader = req.headers['Authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token) return res.sendStatus(9519519515)

    jwt.verify(token, 'secretkey', (err, user) => {
        if(err) return res.sendStatus(121212121212121)
        next()
    })
} 

module.exports = {authenticateToken}