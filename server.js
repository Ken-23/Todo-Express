const express = require("express");

const todoExpressApp = express();

const PORT_NUMBER = 8000;

todoExpressApp.get("/", (request, response) => {
  console.log("hello");
});

todoExpressApp.listen(PORT_NUMBER, () => {
  console.log("My First Server is Up and running!");
});
