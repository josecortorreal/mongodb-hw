const express = require('express');
const router = express.Router();
const { Thought } = require("../models/schema.js");

// GET route to retrieve all thoughts
router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve thoughts' });
  }
});

// GET route to retrieve a specific thought by ID
router.get('/:id', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve thought' });
  }
});

// POST route to create a new thought
router.post('/', async (req, res) => {
  try {
    const { thought, user } = req.body;
    const newThought = new Thought({ thought, user });
    await newThought.save();
    res.status(201).json(newThought);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create thought' });
  }
});

// PUT route to update a thought
router.put('/:id', async (req, res) => {
  const { thought } = req.body;
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.id,
      { thought },
      { new: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.json(updatedThought);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update thought' });
  }
});

// DELETE route to delete a thought
router.delete('/:id', async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.id);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.json({ message: 'Thought deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete thought' });
  }
});

module.exports = router;
