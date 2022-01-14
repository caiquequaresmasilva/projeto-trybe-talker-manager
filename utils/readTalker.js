const fs = require('fs/promises');

module.exports = async (file) => {
  try {
    const data = await fs.readFile(file, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.log(err.message);
  }
};
