const express = require('express');
const bodyParser = require('body-parser');
const { talkerRoutes, rootRoutes } = require('./routes');

const app = express();
app.use(bodyParser.json());

const PORT = '3000';

app.use('/', rootRoutes);
app.use('/talker', talkerRoutes);

app.listen(PORT, () => {
  console.log('Online');
});
