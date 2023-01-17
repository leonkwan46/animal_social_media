const { authenticateToken } = require('./middleware/authMiddleware')

app.get('/test', authenticateToken, (req, res) => {
    res.alert("asd")
})