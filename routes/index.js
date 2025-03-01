const Router = require("express").Router();
const { errorPage } = require("../controllers/main");
const AdminRouter = require("./AdminRoutes");
const MainRouter = require("./MainRoutes");

Router.use("/", MainRouter);
Router.use("/admin", AdminRouter);
Router.get("/*", errorPage);

module.exports = Router;
