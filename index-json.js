const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();
const port = 8081;
const swaggerDocument = require('./blueprint.json');

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/health", (req, res) => res.type("text/plain").send("OK"));

app.listen(port, () => console.info(`Example app listening on port ${port}!`));
