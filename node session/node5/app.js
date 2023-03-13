const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');
const write = require('./modules/write');
const read = require('./modules/read');

// const profiles = [
//     { name: 'Jim' },
//     { name: 'Dwigth' },
//     { name: 'Pam' },
//     { name: 'Kevin' },
//     { name: 'Stanley' }
// ];

// const json = JSON.stringify(profiles, '', 2);
// write(filePath, json);

async function readfile(pathh) {
    const data = await read(pathh);
    renderData(data);
}

function renderData(data) {
    data = JSON.parse(data);
    data.forEach(value => console.log(value));
}

readfile(filePath);