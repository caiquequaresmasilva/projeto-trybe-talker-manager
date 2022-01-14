const readTalker = require('../utils/readTalker');
const writeTalker = require('../utils/writeTalker');

const PATH = './talker.json';

module.exports = async (req, res) => {
  const { name, age, talk } = req.body;
  const talkers = await readTalker(PATH);
  const newTalker = {
    name,
    age,
    id: talkers.length + 1,
    talk: { ...talk },
  };

  talkers.push(newTalker);
  await writeTalker(PATH, JSON.stringify(talkers));

  res.status(201).json(newTalker);
};