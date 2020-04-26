/* eslint-disable consistent-return */
const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route     POST api/users
// @desc      Register a user
// @accress   Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Enter a valid email').isEmail(),
    check(
      'password',
      'Password has to be at least 6 characters long'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({ name, email, password });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.send('user saved');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
