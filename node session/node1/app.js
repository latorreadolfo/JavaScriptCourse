const axios = require('axios');

const { Profile } = require('./modules/mod1');

const p1 = new Profile('Matthew');
console.log(p1);


// -> axios import example

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e));


// const p1 = new Profile('Matthew');
// console.log(p1);

// -> example to import a module

// const {name, lastname, showName } = require('./modules/mod1');

// console.log(name, lastname);