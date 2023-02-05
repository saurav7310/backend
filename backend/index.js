require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { listen } = require("express/lib/application");
const fetchApiController = require("./src/controller/apiFetch");
const app = express();
// i have cors package for handling the cors error
app.use(cors());
// i am using local host port from env if that port is avalaible otherwise 8080
const port = process.env.PORTNUM;

app.get("/", fetchApiController);
app.listen(port, () => {
  console.log("server started", port);
});
