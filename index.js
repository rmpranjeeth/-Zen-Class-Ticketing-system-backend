const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const connection = require("./db")
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");


//database connection
connection();

//middeleware
app.use(express.json());
app.use(cors());


//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`The server has started on port: ${port}`));


