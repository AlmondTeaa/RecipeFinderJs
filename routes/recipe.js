const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/recipe", async (req, res) => {
    const queriedRecipe = req.query.dish
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${queriedRecipe}`
    console.log(url);
    try {
        const {data} = await axios.get(url)
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }

    console.log(queriedRecipe);
}) 

module.exports = router;