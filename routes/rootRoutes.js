const express = require('express');
const { postLoginMiddleares } = require('../middlewares');

const HTTP_OK_STATUS = 200;
const router = express.Router();

// não remova esse endpoint, e para o avaliador funcionar
router.get('/', (_request, response) => {
    response.status(HTTP_OK_STATUS).send();
});

router.post('/login', postLoginMiddleares);

module.exports = router;