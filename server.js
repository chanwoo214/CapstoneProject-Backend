require("dotenv").config();
const express = require("express");
let dbConnect = require("./dbConnect");
let gameRoutes = require("./routes/gameRoutes")
const cors = require("cors");
const app = express();
const verifyToken = require('./middlewares/verifyTokenMiddleware');

// parse requests of content-type - application / json
app.use(express.json());
app.use(cors());

// Register a middleware to protect routes
//app.use(verifyToken);

app.use('/api', verifyToken, gameRoutes); //this applies verifyToken to /api only

app.get("/", (req, res) => {
    res.json({ message: "Welcome from the API. This root path is not protected." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});