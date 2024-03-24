const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//connect to express app
const app = express();

//connect to mongodb
const dbURI =
  "mongodb+srv://mukeshkhanna:mukeshkhanna2024@cluster0.7hfgtbw.mongodb.net/UsersDB?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(3001, () => {
      console.log("server connected to port 3001 and connected to mongoDb");
    });
  })
  .catch((error) => {
    console.log("unable to connect to server ", error);
  });
//middleware
app.use(bodyParser.json());
app.use(cors());
