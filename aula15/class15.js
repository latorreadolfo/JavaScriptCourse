let num1 = 0.7;
let num2 = 0.1;

num1 += num2;    // 0.8
num1 += num2;    // 0.9
num1 += num2;    // 1.0

/* METHOD WITHOUT USING "Number" and "toFixed" function

num 1 = ((num1 * 100) + (num2 * 100)) / 100;    //0.8
num 1 = ((num1 * 100) + (num2 * 100)) / 100;    //0.9
num 1 = ((num1 * 100) + (num2 * 100)) / 100;    //1.0

*/

num1 = Number(num1.toFixed(2)); // It could be -> | num1 = parseFloat(num1.toFixed(2)); | as well.

// console.log(num1.toString() + num2);
// num1 = num1.toString();
// console.log(num1.toString(2));
// console.log(num1.toFixed(2));
// console.log(Number.isInteger(num1));



console.log(num1);