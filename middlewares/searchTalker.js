const readTalker = require('../utils/readTalker');

const PATH = './talker.json';

module.exports = async (req, res) => {
  const { q = '' } = req.query;
  const talkers = await readTalker(PATH);
  if (!q) return res.status(200).json(talkers);
  const filteredTalkers = talkers.filter(
    ({ name }) => name.toLowerCase().includes(q.toLowerCase()),
  );
  res.status(200).json(filteredTalkers);
};