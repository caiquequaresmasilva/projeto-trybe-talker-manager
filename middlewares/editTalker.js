const readTalker = require('../utils/readTalker');
const writeTalker = require('../utils/writeTalker');

const PATH = './talker.json';

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const talkers = await readTalker(PATH);
  const talkerIndex = talkers.findIndex((t) => t.id === parseInt(id, 10));
  const editedTalker = {
    name,
    age,
    id: parseInt(id, 10),
    talk,
  };
  talkers[talkerIndex] = editedTalker;

  await writeTalker(PATH, JSON.stringify(talkers));

  res.status(200).json(editedTalker);
};
