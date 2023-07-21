const express = require("express");
const ErrorBuilder = require("./utils/ErrorBuilder");
const errorMiddleware = require("./middleware/error.middleware");
const cors = require("cors");
const routes = require("./routes");
const pino = require('pino');
const pinoHttp = require('pino-http');
const compression = require("compression");

const logger = pino();
const app = express();

app.use(compression());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(pinoHttp({ logger }));

app.use(routes);

// 404 route handler
app.use((req, res, next) => {
  const error = new ErrorBuilder(404, "NOT_FOUND").build();
  res.status(error.statusCode).send(error);
});

app.use(errorMiddleware);

module.exports = app;
