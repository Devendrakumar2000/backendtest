
const express = require("express");
const detailsController2 = require("../Component/bollywood")


const detailsRouter2 = express.Router();
detailsRouter2.route("/bollywood").get(detailsController2.apiController2)


module.exports = detailsRouter2;