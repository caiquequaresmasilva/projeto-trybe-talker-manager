const express = require('express');
const { getTalkers, getTalkerById } = require('../middlewares');

const router = express.Router();

router.get('/', getTalkers);
router.get('/:id', getTalkerById);

module.exports = router;