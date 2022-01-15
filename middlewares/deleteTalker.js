const readTalker = require('../utils/readTalker');
const writeTalker = require('../utils/writeTalker');

const PATH = './talker.json';

module.exports = async (req, res) => {
  const { id } = req.params;
  let talkers = await readTalker(PATH);
  talkers = talkers.filter((t) => t.id !== parseInt(id, 10));
  await writeTalker(PATH, JSON.stringify(talkers));
  res.status(204).send();
};