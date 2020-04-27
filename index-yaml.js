const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();
const port = 8082;
const swaggerDocument = YAML.load("./blueprint.yaml");

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/health", (req, res) => res.type("text/plain").send("OK"));

app.listen(port, () => console.info(`Swagger UI YAML will be served from port ${port}!`));
