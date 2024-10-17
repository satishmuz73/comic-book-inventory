const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(express.json()); // req.body
const PORT = process.env.PORT || 3000;

// // Import the router files
const comicRouters = require("./routers/comicRouter")

// // Use the routes
app.use('/Comic', comicRouters);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
