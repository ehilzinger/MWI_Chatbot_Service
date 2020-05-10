/* eslint-disable no-console */
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
require("dotenv").config();
require('./config/db')();

const server = express();
const port = process.env.PORT || 3000;

const University = require("./models/universityModel");

const { serversideValidationMiddleware } = require("./middleware");

const healthCheckRouter = require("./routers/healthCheckRouter")();
const universityRouter = require("./routers/universityRouter")(University);

server.use(cors());
server.use(compression());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(serversideValidationMiddleware);

server.use("/health", healthCheckRouter);
server.use("/universities", universityRouter);


server.listen(port, () => {
    console.log(`Running on port ${port}`);
});
