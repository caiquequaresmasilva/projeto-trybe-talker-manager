const express = require('express');
const bodyParser = require('body-parser');
const talkerRoutes = require('./routes/talkerRoutes');
const { loginValidation, generateToken } = require('./middlewares');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});
app.use('/talker', talkerRoutes);
app.post('/login', [loginValidation, generateToken]);

app.listen(PORT, () => {
  console.log('Online');
});
