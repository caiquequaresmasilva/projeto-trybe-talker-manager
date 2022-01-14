const express = require('express');
const { getTalkers, getTalkerById, postTalkerMiddleware } = require('../middlewares');

const router = express.Router();

router.get('/', getTalkers);
router.get('/:id', getTalkerById);
router.post('/', postTalkerMiddleware);

module.exports = router;