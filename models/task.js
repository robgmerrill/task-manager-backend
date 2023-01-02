const mongoose = require("mongoose");

// This is the structure for the data
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

// set up model - representation of the data - wrapper for a schema - interface for the database for CRUD abilities
module.exports = mongoose.model("Task", TaskSchema);
