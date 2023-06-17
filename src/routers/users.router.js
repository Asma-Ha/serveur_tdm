const express = require('express');
const router = express.Router();
const userService = require("../services/users")


router.post('/', async function(req, res) {
  try {
    await userService.addUser(req.body);
    res.send("successful sign up");
  } catch (err) {
    console.error(`Error while adding a new user`, err.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const info = req.body; 
    const user = await userService.login(info);

    res.json(user);
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
});

module.exports = router;