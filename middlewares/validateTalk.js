module.exports = (req, res, next) => {
  const { talk = {} } = req.body;
  const { watchedAt, rate } = talk;
  const rateFlag = rate || rate === 0;
  if (!(talk && watchedAt && rateFlag)) {
    return res.status(400).json({ 
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios', 
    });
  }
  next();
};