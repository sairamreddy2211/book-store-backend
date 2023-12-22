const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");

const routes = express.Router();

routes.use("/books", bookRoutes);
routes.use("/user", userRoutes);

module.exports = routes;
