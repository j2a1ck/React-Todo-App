import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export const tasks = mongoose.model("tasks", todoSchema);
