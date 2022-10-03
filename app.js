const express = require("express");
const app = express();

const a = app.get("/", (request, response) => {
  response.send("Home Page");
});

const b = app.get("/about", (request, response) => {
  response.send("About Page");
});

app.listen(3000);

module.exports = a;
module.exports = b;
