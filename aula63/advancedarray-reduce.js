// Sum all numbers with reduce
// Return an array with the pairs (reduce filter)
// Return an array with the double of the values (reduce map)

const numbers = [24, 42, 21, 53, 3, 5, 2, 1, 10, 11, 53, 21, 5, 2, 9];

const total = numbers.reduce(function(acumulator, value, index, array) {
    acumulator += value;
    return acumulator;
}, 0);

console.log(total);


const pairs = numbers.reduce(function(acumulator, value, index, array) {
    if (value % 2 === 0) acumulator.push(value);
    return acumulator;
}, []);

// console.log(pairs);                          // -> result of exercise 1

const double = numbers.reduce(function(acumulator, value, index, array) { 
    acumulator.push(value * 2);
    return acumulator;
}, []);

// console.log(double);                         // -> result of exercise 2






// Return the oldest person in the array below        // -> exercise 3

const profiles = [
    { name: 'Dwight', age: 38 },
    { name: 'Angela', age: 31 },
    { name: 'Kevin', age: 38 },
    { name: 'Michael', age: 35 },
    { name: 'Pam', age: 28 },
    { name: 'Jim', age: 30 }
];


const oldest = profiles.reduce(function(acumulator, value) {   // attention to this case, that acumulator is the first index of the array and 
    if (acumulator.age > value.age) return acumulator;         // value is the second while you don't add the first reduce value at the end of the reduce function
    return value;
});

console.log(oldest);                            // -> result of the exercise 3