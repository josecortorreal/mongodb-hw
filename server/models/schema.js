const mongoose = require('mongoose');

// Create a User schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

// Create a Thoughts schema
const thoughtsSchema = new mongoose.Schema({
  thought: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

// Create a Thoughts model based on the schema
const Thought = mongoose.model('Thought', thoughtsSchema);

module.exports = { User, Thought };


