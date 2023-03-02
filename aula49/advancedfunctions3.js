function createMultiplier(multiplier) {
    return function(n) {
        return n * multiplier;
    };
}

const double = createMultiplier(2);                     //          -> this values are for wide scope (multiplier)
const triple = createMultiplier(3);
const quad = createMultiplier(4);

console.log(double(2));                                 //          -> this values are for inner scope (n)
console.log(triple(2));
console.log(quad(2));

/*                          //          -> function creating an object
function createProfile(name, lastname, age) {
    return { name, lastname, age};
}

const obj1 = createProfile('Robert', 'Nelson', 25);
const obj2 = {
    name: 'Robert',
    lastname: 'Nelson',
    age: 25
};
console.log(obj1);
console.log(obj2);

console.log(typeof obj1);
console.log(typeof obj2);
*/