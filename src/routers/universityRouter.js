const express = require('express');
const { universityController } = require("../controllers");

module.exports = function route(University) {
    const router = express.Router();
    const controller = universityController(University);
    router.route("/").get(controller.get).post(controller.post);

    return router;
}
