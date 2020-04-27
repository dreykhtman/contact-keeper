const express = require('express');
const { check, validationResult } = require('express-validator');

const auth = require('../middleware/auth');
const User = require('../models/User');
const Contact = require('../models/Contact');

const router = express.Router();

// @route     GET api/contacts
// @desc      Get user's contacts
// @accress   Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/contacts
// @desc      Add new contact
// @accress   Private
router.post('/', (req, res) => {
  res.send('add a contact');
});

// @route     PUT api/contacts/:id
// @desc      Update a contact
// @accress   Private
router.put('/:id', (req, res) => {
  res.send('update contact');
});

// @route     DELETE api/contacts/:id
// @desc      Delete a contact
// @accress   Private
router.delete('/:id', (req, res) => {
  res.send('delete contact');
});

module.exports = router;
