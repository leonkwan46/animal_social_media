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

// Error Handling middleware always at LAST
// Can only use on Routes/Endpoints, not DB Connection
app.use(errorHandler)

app.listen(5000, () => {
    console.log("http://localhost:5000");
});