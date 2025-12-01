import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, postedBy: req.userId });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getOpenTasks = async (req, res) => {
  const tasks = await Task.find({ status: "open" }).populate("postedBy", "name collegeName");
  res.json(tasks);
};

export const acceptTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);

  if (!task || task.status !== "open") return res.status(400).json({ message: "Task not available" });

  task.status = "accepted";
  task.acceptedBy = req.userId;
  await task.save();

  res.json({ message: "Task accepted", task });
};
