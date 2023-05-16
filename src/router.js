const express = require('express');
const router = express.Router();
const restaurantService = require("./services/restaurants")


router.get('/restaurants', async function(req, res, next) {
  try {
    res.json(await restaurantService.getAll());
  } catch (err) {
    console.error(`Error while retrieving the list of restaurants `, err.message);
    next(err);
  }
});

module.exports = router;