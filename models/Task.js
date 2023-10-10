const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = Schema(
  {
    task: { type: String, required: true },
    isComplete: { type: Boolean, required: true },
  },
  { timestamps: true } // 이게 있으면 createAt과 updateAt이 생긴다
);
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
