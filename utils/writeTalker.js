const fs = require('fs/promises');

module.exports = async (file, data) => {
  try {
    await fs.writeFile(file, data);
  } catch (err) {
    console.log(err.message);
  }
};