function calculate(operator, acumulator, ...numbers) {
    for (let number of numbers) {
       if (operator === '+') acumulator += number;
       if (operator === '-') acumulator -= number;
       if (operator === '*') acumulator *= number;
       if (operator === '/') acumulator /= number;
    }
    console.log(acumulator);
}
calculate('+', 0, 20, 30, 40, 50);
calculate('-', 0, 20, 30, 40, 50);
calculate('*', 50, 50);
calculate('/', 1000, 10);


/*                                                  //       -> function receiving an array as arguments
function getObj([ value1, value2, value3 ]) {
    console.log(value1, value2, value3);
}
let profile = ['Steven', 'Johnson', 45];
getObj(profile);
*/

/*                                                  //       -> function receiving an object as arguments
function getObj({ name, lastname, age }) {
    console.log(name, lastname, age);
}
let profile = {
    name: 'Steven',
    lastname: 'Johnson',
    age: 45
};
getObj(profile);
*/

/*                                                  //      -> function sum with arguments and default values
function suM(a, b = 2, c = 5) {                     //      -> you can give a default value in case that the user has not send all the arguments
    console.log(a + b + c);
}
suM(8);
suM(10, 5);
suM(8, undefined, 10);
*/

/*  //                      -> functions have a var arguments that hold all of the sent arguments (JUST "function"!!!)

function sumWarguments(a, b, c) {
    let total = 0;
    for (let argument of arguments) {
        total += argument;
    }
    console.log(total, a, b, c);        //      -> still sum all the arguments, but had assigned 1 to a, 2 to b and 3 to c
}
sumWarguments(1, 2, 3, 4, 5, 6, 7, 8, 9);
*/

/* //                   -> function printing one of his own arguments that I sent calling the function
function funct1on() {
    console.log(arguments[5])
}

funct1on('Apple', 'Coconut', 'Melon', 'Grape', 'Orange', 'Pear');
*/