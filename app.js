const express = require("express");
const app = express();
// This line imports an additional module that contains routes for handling tasks. This file is an object that defines various routes for handling tasks
const tasks = require("./routes/tasks");
const todos = require("./routes/todos");

// middleware - this allows the server to parse JSON request bodies. It is used to parse HTTP reuqest bodies that have a `Content-Type` header of `application/json`
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Hello World");
});

// This line mounts the `tasks` routes at the path `/api/v1/tasks`, which means that all the routes in the `tasks` module will be prefiexed with `/api/v1/tasks`
app.use("/api/v1/tasks", tasks);

app.use("/api/v1/todos", todos);

// we do v1 because if we want to update api we can point to v2
// app.get('/api/v1/tasks')         - get all the tasks

// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/id')    - update task
// app.delete('/api/v1/tasks/:id')  - delete task

// set the port of our application
const port = 3005;

app.listen(port, console.log("Server started on port " + port));
