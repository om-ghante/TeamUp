const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/userlist', async (req, res) => {
  try {
    const { skills, languages } = req.query;

    let filter = {};

    if (skills) {
      filter.skills = { $in: skills.split(',') }; 
    }

    if (languages) {
      filter.languages = { $in: languages.split(',') }; 
    }

    const users = await User.find(filter);

    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

router.get('/userlist/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching user details' });
  }
});

module.exports = router;
