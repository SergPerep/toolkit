import express from "express";
import recordsAPI from "./components/tasks/tasksAPI";
import handleErrors from "./components/errors/handleErrors";
import logRequests from "./utils/logRequests";
const app = express();

app.use(logRequests);
app.use(express.json());

// ROUTES
app.use("/tasks", recordsAPI);

app.use(handleErrors);

export default app;
