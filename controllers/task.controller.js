const Task = require("../models/Task");

const taskController = {};

taskController.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    //   const newTask = await Task.create({ task, isComplete });
    const newTask = new Task({ task, isComplete });
    await newTask.save();
    return res.status(200).json({ status: "success", data: newTask });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};

taskController.getTasks = async (req, res) => {
  try {
    const taskList = await Task.find({});
    console.log("tttt", taskList);
    // const taskList = [
    //   { task: "테스트", isComplete: false, id: 0 },
    //   { task: "테스트", isComplete: false, id: 3 },
    //   { task: "테스트", isComplete: false, id: 4 },
    // ];
    res.status(200).json({ status: "success", data: taskList });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};

taskController.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      throw new Error("App can not find the task");
    }
    const fields = Object.keys(req.body);
    fields.map((item) => (task[item] = req.body[item]));
    await task.save();
    res.status(200).json({ status: "success", data: task });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};
taskController.deleteTask = async (req, res) => {
  try {
    const deleteItem = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success", data: deleteItem });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};
module.exports = taskController;
