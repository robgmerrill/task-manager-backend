const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  // res.send("get all tasks");
  try {
    const tasks = await Task.find();
    res.status(201).json({ tasks: tasks });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task: task });
  } catch (err) {
    res.status(500).json({ msg: err }); // general server error
  }
};

const getSingleTask = (req, res) => {
  res.send("get single task");
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update single task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
