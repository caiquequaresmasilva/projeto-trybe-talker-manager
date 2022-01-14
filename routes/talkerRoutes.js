const express = require('express');
const { getTalkers } = require('../middlewares');

const router = express.Router();

router.get('/', getTalkers);

module.exports = router;