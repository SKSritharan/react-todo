const express = require("express");

const router = express.Router();
const Todo = require("../models/todo");

//Post Method
router.post("/todos", (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
  });
  todo
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//Get all Method
router.get("/todos", (req, res) => {
  Todo.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//Get by ID Method
router.get("/todos/:id", (req, res) => {
  Todo.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//Update by ID Method
router.patch("/todos/:id", (req, res) => {
  Todo.updateOne(
    { _id: req.params.id },
    { $set: { text: req.body.text, completed: req.body.completed } }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//Delete by ID Method
router.delete("/todos/:id", (req, res) => {
  Todo.deleteOne({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

module.exports = router;
