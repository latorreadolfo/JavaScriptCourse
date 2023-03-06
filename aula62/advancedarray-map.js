// MAP ARRAY FUNCTION - It always has the same index number in the output
const numbers = [23, 43, 21, 53, 3, 5, 2, 1, 10, 11, 53, 21, 5, 2, 9];

// values * 2

const numbersInDouble = numbers.map(function(value, index, array) {
    return value * 2;
});



// EXERCISE
// 1 -> Return just the string of name
// 2 -> Remove just the key name
// 3 -> Add an id key for every object



const profiles = [
    { name: 'Dwight', age: 38 },
    { name: 'Angela', age: 31 },
    { name: 'Kevin', age: 38 },
    { name: 'Michael', age: 35 },
    { name: 'Pam', age: 28 },
    { name: 'Jim', age: 30 }
];

// Ex n 1

// const justNames = profiles.map(obj => obj.name);

// console.log(justNames);

// Ex n 2

// const justAges = profiles.map(function(obj) {
//     delete obj.name;
//     return obj;
// });

// console.log(justAges);

// Ex n 3

const addID = profiles.map(function (obj, index) {
     obj.id = ((index + 1) * 8);
     return obj;
});

console.log(addID);