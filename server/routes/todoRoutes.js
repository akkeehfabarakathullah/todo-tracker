const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.status(201).json(newTodo);
});

module.exports = router;

router.put("/:id", async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" });
  res.json(updated);
});
router.patch("/:id/done", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.done = !todo.done;
  await todo.save();
  res.json(todo);
});
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});
module.exports = router;