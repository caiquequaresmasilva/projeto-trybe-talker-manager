const readTalker = require('../utils/readTalker');

const PATH = './talker.json';

module.exports = async (_req, res) => {
    const talkers = await readTalker(PATH);
    res.status(200).json(talkers);
};