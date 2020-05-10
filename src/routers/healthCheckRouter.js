const express = require('express');
const { healthCheckController } = require("../controllers");

module.exports = function route() {
    const router = express.Router();
    const controller = healthCheckController();
    router.route("/").get(controller.get);

    return router;
}
