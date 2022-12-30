// This is a module exports an instance of an `express.Router`, which is a middleware taht can be used to define a series of routes.

const express = require("express");
const router = express.Router();
const { getAllTasks } = require("../controllers/tasks");

// imported in this controller from ../controllers/tasks
router.route("/").get(getAllTasks);

// This line exports the `router` object so that it can be used in other parts of the application.
module.exports = router;
