const fs = require('fs').promises;


module.exports = (pathh, data) => fs.writeFile(pathh, data, { flag: 'w' });