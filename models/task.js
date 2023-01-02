const mongoose = require("mongoose");

// This is the structure for the data
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a name"],
    trim: true,
    maxlength: [20, "Name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    required: [true, "Must provide a status of true or false"],
  },
});

// set up model - representation of the data - wrapper for a schema - interface for the database for CRUD abilities
module.exports = mongoose.model("Task", TaskSchema);
