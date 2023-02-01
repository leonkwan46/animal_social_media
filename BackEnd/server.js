const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./db/config')
const bodyParser = require('body-parser')
const errorHandler = require('./middleware/errorHandler')

require('dotenv').config()

//Middlewares (App-level)
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 1000000000 }));


// MongoDB Connection
connectDB();


// Register Router
const registerRoute = require('./routes/register')
app.use('/register', registerRoute)

//Login Router
const loginRoute = require('./routes/login')
app.use('/login', loginRoute)

// Profile Router
const profileRoute = require('./routes/profile')
app.use('/profile', profileRoute)

//get post Router
const getPostRoute = require('./routes/getPost')
app.use('/getpost', getPostRoute)

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