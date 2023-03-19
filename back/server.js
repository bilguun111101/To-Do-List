const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require("./db");
const Task = require("./Route/TodoList");

require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/todo-list", Task);

connectDB();

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})