const name = 'Adolfo';
const lastname = 'La Torre';
const age = 29;
const weight = 74;
const heightInMeters = 1.62;
let bodyMassIndex;
let bornIn;

bodyMassIndex = weight / (heightInMeters * heightInMeters);
bornIn = 2023 - age;

console.log(`${name} ${lastname} is ${age} years old and weights ${weight} kg.`);
console.log(`He has ${heightInMeters}m of height and his Body Mass Index is ${bodyMassIndex}`);
console.log(`${name} was born in ${bornIn}.`);