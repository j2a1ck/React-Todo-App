import express from "express";
import { tasks } from "../models/tasks.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newTodo = await tasks.create({
      title: req.body.title,
      completed: req.body.completed,
    });
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTask = await tasks.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        completed: req.body.completed,
      },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const task = await tasks.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    const updatedTask = await tasks.findByIdAndUpdate(
      id,
      { completed: !task.completed },
      { new: true }
    );

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await tasks.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ success: true, _id: id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const getAllTasks = await tasks.find({});
    res.status(200).json(getAllTasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
