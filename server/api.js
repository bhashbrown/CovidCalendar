const express = require('express');

const calController = require('./calController.js');

const router = express.Router();

router.get('/',
  calController.getEntries,
  (req, res) => res.status(200).json(res.locals.entries));

router.post('/entry',
  calController.postEntry,
  (req, res) => res.status(200).json(res.locals.newEntry));

router.post('/delete',
  calController.deleteEntry,
  (req, res) => res.status(200).json(res.locals.delete));

module.exports = router;
