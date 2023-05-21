const express = require('express');
const router = express.Router();
const restaurantService = require("./services/restaurants")


router.get('/getAll', async function(req, res) {
  try {
    res.json(await restaurantService.getAll());
  } catch (err) {
    console.error(`Error while retrieving the list of restaurants `, err.message);
  }
});

router.get('/:id/getRecipes', async function(req, res) {
  try {
    const restaurantId = req.params.id;
    const recipes = await restaurantService.getRecipes(restaurantId);
    res.json(recipes);
  } catch (err) {
    console.error(`Error while retrieving the list of recipes: ${err.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;