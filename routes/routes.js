const express = require("express");
const router = express.Router();

router.get("/todo");

router.post("/todo/add");

router.put("/todo/:id");

router.delete("/todo/:id");

module.exports = { getAllTodoListFromDB };
