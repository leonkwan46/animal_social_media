require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./db/config');
const errorHandler = require('./middleware/errorHandler');

// Import routes
const registerRoute = require('./routes/register');
const loginRoute = require("./routes/login");
const testRoute = require('./routes/test');

const app = express();

//Middlewares (App-level)
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

// MongoDB Connection
connectDB();


// Register Router
app.use('/register', registerRoute)


// Login Router
app.use("/login", loginRoute);
// Test Router
app.use('/test', testRoute)

//Login Router
const loginRoute = require('./routes/login')
app.use('/login', loginRoute)

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