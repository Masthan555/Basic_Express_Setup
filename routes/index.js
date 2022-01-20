const express = require("express");
const v1Router = require("./api/v1/index");

const mainRouter = express.Router();

mainRouter.use("/v1", v1Router);

module.exports = mainRouter;