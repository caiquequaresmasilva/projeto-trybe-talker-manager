const DATE_PATTERN = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
// FONTE: https://regexland.com/regex-dates/

module.exports = (req, res, next) => {
  const { talk: { watchedAt, rate } } = req.body;
  if (!DATE_PATTERN.test(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  const intRate = parseInt(rate, 10);
  if (!Number.isInteger(intRate) || (intRate < 1 || intRate > 5)) { 
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
};