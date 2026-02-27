const express = require("express");

const router = express.Router();

router.get("/recipe", (req, res) => {
    const queriedRecipe = req.query.dish

    console.log(queriedRecipe);
}) 

module.exports = router;