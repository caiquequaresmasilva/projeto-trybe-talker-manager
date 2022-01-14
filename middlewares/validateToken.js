const generatedTokens = require('../generatedTokens');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });
  if (!generatedTokens.some((t) => t === authorization)) { 
    return res.status(401).json({ message: 'Token inválido' }); 
  }
  next();
};