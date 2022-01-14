const crypto = require('crypto');
const generatedTokens = require('../generatedTokens');

// FONTE: https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js
module.exports = (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  generatedTokens.push(token);
  res.status(200).json({ token });
};