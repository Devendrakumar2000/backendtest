const express=require("express");
const detailsController = require('../Component/details');


const detailsRouter = express.Router();
detailsRouter.route("/details")
.get(detailsController.apiController)


module.exports = detailsRouter;
  