const fs = require('fs').promises;


module.exports = (pathh) => fs.readFile(pathh, 'utf8');