const express = require('express')
//make color in log
const colors = require('colors')
//make environment variable
const dotenv = require('dotenv').config()
//import error middleware
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./db/config')
const port = process.env.PORT || 5000


connectDB()
const app = express()

const cors = require('cors');
app.use(cors());



//in order to use req.body -> it needs middleware to carry value after value has been input
// declare to have middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// tell what we listen to + import routes to use
// app.use('/api/messages',require('./routes/messageRoutes'))
app.use('/api/users',require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`localhost:${port}`)
    
});

//JSON web token (note)
//encoded   -header (algorithm,token type)
//          -data (json format + id + issue at(timestamp))
//          -signature (tell that JWT is authorized with header, middleware, known as token is produce for whom e.g. private, party)
//right route -> login -> create token -> send token and header to accessed protected route