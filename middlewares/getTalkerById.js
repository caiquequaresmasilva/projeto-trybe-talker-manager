const readTalker = require('../utils/readTalker');

const PATH = './talker.json';

module.exports = async (req, res) => {
    const talkers = await readTalker(PATH);
    const { id } = req.params;
    const talker = talkers.find((e) => e.id === parseInt(id, 10));

    if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

    res.status(200).json(talker);
};