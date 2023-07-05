const express = require('express');
const router = express.Router();
const {User} = require("../models/schema.js");

// GET route to retrieve all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

// GET route to retrieve a specific user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
});

// POST route to create a new user
router.post('/', async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const user = new User({ fullName, email });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create user' });
  }
});

router.put('/:id', async (req, res) => {
    const { fullName, email } = req.body;
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { fullName, email },
        { new: true } // Add this option to get the updated user as the result
      );
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: 'Failed to update user' });
    }
  });
  

// DELETE route to delete a user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete user' });
  }
});

module.exports = router;
