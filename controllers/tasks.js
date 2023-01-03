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

const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.find({ _id: taskID });
    if (task.length === 0) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(201).json({ task: task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateTask = (req, res) => {
  res.send("update single task");
};

const deleteTask = async (req, res) => {
  // res.send("delete task");
  try {
    const { id: deleteTaskId } = req.params;
    const task = await Task.deleteOne({ _id: deleteTaskId });
    if (task.length === 0) {
      return res.status(404).json({ msg: `No task with id : ${deleteTaskId}` });
    }
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
