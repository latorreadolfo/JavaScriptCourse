let num1 = 9.54363;
let num2 = 9.49999;
let num3 = 16;

console.log(Math.floor(num1));          // -> rounding down
console.log(Math.ceil(num1));           // -> rounding up
console.log(Math.round(num1));          // -> automatic round to the nearest range.
console.log(Math.round(num2));          // -> automatic round to the nearest range.
console.log(num3 ** 0.5);               // -> Finding square root without using Math() || num3^1/2 ||<- It's the same 


console.log(`Math functions:`);


console.log(Math.max(-20, -10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 100));    // picks the biggest number in range
console.log(Math.min(-20, -10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 100));    // picks the lowest number in range
console.log(Math.random() * (10 - 0));                              // picks a random number from 0 to 10
console.log(Math.PI);                                               // PI number
console.log(Math.pow(2, 10));                                       // potentiation 2^10