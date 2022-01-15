const express = require('express');
const { 
    getTalkers, 
    getTalkerById, 
    postTalkerMiddlewares, 
    putTalkerIdMiddlewares,
    deleteTalkerIdMiddlewares, 
} = require('../middlewares');

const router = express.Router();

router.get('/', getTalkers);
router.get('/:id', getTalkerById);
router.post('/', postTalkerMiddlewares);
router.put('/:id', putTalkerIdMiddlewares);
router.delete('/:id', deleteTalkerIdMiddlewares);

module.exports = router;