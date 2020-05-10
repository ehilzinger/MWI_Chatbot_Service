const express = require('express');
const { faqController } = require("../controllers");

module.exports = function route(University) {
    const router = express.Router();
    const controller = faqController(University);
    router.route("/").post(controller.post);

    return router;
}