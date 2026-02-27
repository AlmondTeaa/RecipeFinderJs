const express = require("express")
const bodyPasrser = require("body-parser");
const axios = require("axios");

const path = require("path");

const app = express();

const indexRouter = require(path.join(__dirname, "routes", "index"));
const recipeRouter = require(path.join(__dirname, "routes", "recipe"));

app.set("view engine", "ejs");
app.use(bodyPasrser.urlencoded());
app.use(express.static("public"));

app.use(indexRouter);
app.use(recipeRouter);

app.listen(3000);