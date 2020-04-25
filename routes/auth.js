const express = require('express');

const router = express.Router();

// @route     GET api/auth
// @desc      Get logged in user
// @accress   Private
router.get('/', (req, res) => {
  res.send('get logged in user');
});

// @route     POST api/auth
// @desc      Authenticate and get token
// @accress   Public
router.post('/', (req, res) => {
  res.send('log in user');
});

module.exports = router;
