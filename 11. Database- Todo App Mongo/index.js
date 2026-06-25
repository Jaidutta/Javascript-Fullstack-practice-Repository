const jwt = require("jsonwebtoken");
const express = require("express");
const { authMiddleware } = require("./middleware");

const app = express();
app.use(express.json())

let CURRENT_USER_ID = 1;
let CURRENT_TODO_ID = 1;

const TODOS = [];
const USERS = [];
app.post("/signup", function (req, res) {
  const username = req.body.username
  const password = req.body.password

  const userExists = USERS.find(user => user.username == username)

  if (userExists) {
    res.status(403).json({
      message: "User with this username already exists"
    })
    return;
  }

  USERS.push({
    id: CURRENT_USER_ID++,
    username,
    password,

  })
  res.json({
    message: "You have signed up successfully"
  })
})

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const userExists = USERS.find(user => (user.username == username) && (user.password == password));

  if (!userExists) {
    res.status(401).json({
      message: "Invalid credentials"
    });
    return;
  }

  const token = jwt.sign({
    userId: userExists.id
  }, "projectmanagementsupersecretpassword123123")

  res.json({
    token
  })
})

app.post("/todo", authMiddleware, (req, res) => {
  const userId = req.userId;
  const title = req.body.title
  const description = req.body.description
  TODOS.push({
    id: CURRENT_TODO_ID++,
    title,
    description,
    userId
  })
  res.status(201).send({
    message: "A new todo has been created"
  })
})

app.delete("/todo/:todId", authMiddleware, (req, res) => {
  const userId = req.userId;
  const todoId = parseInt(req.params.todId);

  const doesUserOwnTodo = TODOS.find(todo => todo.userId === userId && todo.id === todoId);

  if (doesUserOwnTodo) {
    TODOS = TODOS.filter(todo => todo.id !== todoId);
    res.status(200).json({
      message: "Todo deleted"
    });
  } else {
    res.status(403).json({
      message: "Either the todo does NOT exist or the todo may not be owned by you"
    });
  }

})

app.get("/todos", authMiddleware, (req, res) => {
  const userId = req.userId;

  const userTodos = TODOS.filter(t => t.userId === userId);

  res.status(200).json({
    todos: userTodos
  });
});
app.listen(3000);