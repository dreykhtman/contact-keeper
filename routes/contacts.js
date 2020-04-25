const express = require('express');

const router = express.Router();

// @route     GET api/contacts
// @desc      Get user's contacts
// @accress   Private
router.get('/', (req, res) => {
  res.send('get all contacts');
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
