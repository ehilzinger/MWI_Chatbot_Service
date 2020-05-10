/* eslint-disable no-console */
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
require("dotenv").config();
require('./config/db')();

const server = express();
const port = process.env.PORT || 3000;

const healthCheckRouter = require("./routers/healthCheckRouter")();

server.use(cors());
server.use(compression());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use("/health", healthCheckRouter);


server.listen(port, () => {
    console.log(`Running on port ${port}`);
});
