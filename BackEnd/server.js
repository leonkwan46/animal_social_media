require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/config");
const errorHandler = require("./middleware/errorHandler");
const multer = require("multer");

//Middlewares (App-level)
app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
    parameterLimit: 1000000000,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(cors());
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//     limit: "50mb",
//     parameterLimit: 1000000000,
//   })
// );

// MongoDB Connection
connectDB();

// Register Router
const registerRoute = require("./routes/register");
app.use("/register", registerRoute);

//Login Router
const loginRoute = require("./routes/login");
app.use("/login", loginRoute);

// Profile Router
const profileRoute = require("./routes/profile");
app.use("/profile", profileRoute);

//create, get post Router
const homepageRoute = require("./routes/homepage");
app.use("/homepage", homepageRoute);

// Handle following a user and being Followed by a user
const network = require("./routes/network");
app.use("/network", network);

// Error Handling middleware always at LAST
// Can only use on Routes/Endpoints, not DB Connection
app.use(errorHandler);

app.listen(5000, () => {
  console.log("http://localhost:5000");
});

//JSON web token (note)
//encoded   -header (algorithm,token type)
//          -data (json format + id + issue at(timestamp))
//          -signature (tell that JWT is authorized with header, middleware, known as token is produce for whom e.g. private, party)
//right route -> login -> create token -> send token and header to accessed protected route
