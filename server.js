const express = require("express");

const todoExpressApp = express();

const bodyParser = require("body-parser");

todoExpressApp.use(bodyParser.json());

todoExpressApp.use(bodyParser.urlencoded({ extended: false }));

const PORT_NUMBER = 8000;

todoExpressApp.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

todoExpressApp.post("/record0", (req, res) => {
  console.log(req.body);
  res.send("done");
});

todoExpressApp.listen(PORT_NUMBER, () => {
  console.log("My First Server is Up and running!");
});
