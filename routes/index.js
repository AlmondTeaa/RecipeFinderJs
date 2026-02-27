const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {recipe: null, error: null});
})

module.exports = router; 
