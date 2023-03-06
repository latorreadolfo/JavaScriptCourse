// //Filter

// const numbers = [5, 6, 7, 8, 9, 34, 25, 1, 43, 21, 30];
// const result = numbers.filter(biggert10);
// //const result = numbers.filter(value => value > 10);      // -> resumed filter function
// function biggert10(value, index, array) {
//     return value > 10;
// }

// console.log(result);



const profiles = [
    { name: 'Dwight', age: 38 },
    { name: 'Angela', age: 31 },
    { name: 'Kevin', age: 38 },
    { name: 'Michael', age: 35 },
    { name: 'Pam', age: 28 },
    { name: 'Jim', age: 30 }
];


const fourLetter = profiles.filter(function(obj) {
    return obj.name.length > 5;
});
console.log(fourLetter);

const moreTthirty = profiles.filter(function(obj) {
    return obj.age > 31;
});
console.log(moreTthirty);

const lastletterA = profiles.filter(function(obj) {
    return obj.name.toLocaleLowerCase().endsWith('m');
});
console.log(lastletterA);