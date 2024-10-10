const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Get All todos from todos.json file and send it as response

app.get("/todos", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.status(200).json(data);
  });
});

// Add new todo to todos.json file todo have title description and status from request body

app.post("/todos", (req, res) => {
  let todo = req.body;
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
    if (data == "") {
      data = "[]";
    }
    let todos = JSON.parse(data);
    todos.push(todo);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(todo);
    });
  });
});

// Update todo status in todos.json file by id from request body

app.put("/todos/:id", (req, res) => {
  let id = req.params.id;

  let updatedTodo = req.body;
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    let todos = JSON.parse(data);
    let index = todos.findIndex((todo) => todo.id == id);
    todos[index] = updatedTodo;
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(200).json(todos[index]);
    });
  });
});

// Delete todo from todos.json file by id from request body

app.delete("/todos/:id", (req, res) => {
  let id = req.params.id;
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    let todos = JSON.parse(data);
    let index = todos.findIndex((todo) => todo.id == id);
    todos.splice(index, 1);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(200).json(todos);
    });
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
