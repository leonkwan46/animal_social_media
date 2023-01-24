const express = require('express')
const app = express()
const body = require('body-parser')
const cors = require('cors')
const connectDB = require('./db/config')
const bodyParser = require('body-parser')
const errorHandler = require('./middleware/errorHandler')
require('dotenv').config()

// MongoDB Connection
connectDB()

//MiddleWares (App-level)
app.use(body.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

// Register Router
const registerRoute = require('./routes/register')
app.use('/register', registerRoute)

// Test Router
const testRoute = require('./routes/test')
app.use('/test', testRoute)

// Error Handling middleware always at LAST
// Can only use on Routes/Endpoints, not DB Connection
app.use(errorHandler)

app.listen(5000, () => {
    console.log("http://localhost:5000");
});

//JSON web token (note)
//encoded   -header (algorithm,token type)
//          -data (json format + id + issue at(timestamp))
//          -signature (tell that JWT is authorized with header, middleware, known as token is produce for whom e.g. private, party)
//right route -> login -> create token -> send token and header to accessed protected route