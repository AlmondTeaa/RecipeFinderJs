const express = require("express")
const bodyPasrser = require("body-parser");
const axios = require("axios");

const path = require("path");

const app = express();

app.use(bodyPasrser.urlencoded());

app.use("/", (req, res) => {
    res.send("hello world");
})

app.listen(3000);