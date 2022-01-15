const express = require('express');
const { 
    getTalkers, 
    getTalkerById, 
    postTalkerMiddlewares, 
    putTalkerIdMiddlewares,
    deleteTalkerIdMiddlewares,
    getSearchMiddlewares, 
} = require('../middlewares');

const router = express.Router();

router.get('/', getTalkers);
router.post('/', postTalkerMiddlewares);

router.get('/search', getSearchMiddlewares);

router.get('/:id', getTalkerById);
router.put('/:id', putTalkerIdMiddlewares);
router.delete('/:id', deleteTalkerIdMiddlewares);

module.exports = router;