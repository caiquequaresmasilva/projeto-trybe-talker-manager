const express = require('express');
const { 
    getTalkers, 
    getTalkerById, 
    postTalkerMiddlewares, 
    putTalkerIdMiddlewares, 
} = require('../middlewares');

const router = express.Router();

router.get('/', getTalkers);
router.get('/:id', getTalkerById);
router.post('/', postTalkerMiddlewares);
router.put('/:id', putTalkerIdMiddlewares);

module.exports = router;