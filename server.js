require("dotenv").config();
const express = require("express");
let dbConnect = require("./dbConnect");
let clientRoutes = require("./routes/clientRoutes");
let taskRoutes = require("./routes/taskRoutes");

const cors = require("cors");
const app = express();
const verifyToken = require('./middlewares/verifyTokenMiddleware');

const swaggerUi = require ("swagger-ui-express")
const swaggerJsdoc = require("swagger-jsdoc") 

// parse requests of content-type - application / json
app.use(express.json());
app.use(cors());

// Register a middleware to protect routes
//app.use(verifyToken);

//app.use('/api', verifyToken, gameRoutes); //this applies verifyToken to /api only
// app.use('/api/clients', verifyToken, clientRoutes)
// app.use('/api/tasks', verifyToken, taskRoutes)

app.use('/api/clients', clientRoutes)
app.use('/api/tasks',  taskRoutes)

app.get("/", (req, res) => {
    res.json({ message: "Welcome from the API. This root path is not protected." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;


const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Chan's Capstone Project CRUD APIs",
        version: "1.0.0",
        description:
          "This is a simple CRM Web application for Mortgage Advisers",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Chan Woo Shim",
        },
      },
      servers: [
        {
          url: "http://localhost:8080/api",
        },
      ],
    },
    apis: ["src/routes/*.js"],
  };

  const specs = swaggerJsdoc(options);
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(specs)
    );

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});