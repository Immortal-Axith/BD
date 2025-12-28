require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const db = require("./app/models");
db.sequelize.sync()
.then(() => {
 console.log("Synced db.");
})
.catch((err) => {
 console.log("Failed to sync db: " + err.message);
});
var corsOptions = {
 origin: "*"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
 res.json({ message: "Welcome to pizzeria" });
});

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8081;

// Swagger конфигурация
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pizzeria API",
      version: "1.0.0",
      description: "API для Пицерии",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: "Development server",
      },
    ],
    components: {
      schemas: {}, 
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./app/routes/*.js"],
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//routers
require("./app/routes/dish_group.routes")(app);
require("./app/routes/dish.routes")(app);
require("./app/routes/order.routes")(app);
require("./app/routes/price_list.routes")(app);
require("./app/routes/price_list_item.routes")(app);
require("./app/routes/order_item.routes")(app);

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});