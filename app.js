const express = require("express")
const bodyPasrser = require("body-parser");
const axios = require("axios");

const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use(bodyPasrser.urlencoded());
app.use(express.static("public"));

app.use("/", (req, res) => {
    res.render("index", {recipe: null, error: null});
})

app.listen(3000);