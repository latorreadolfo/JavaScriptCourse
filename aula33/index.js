
//                    0          1          2                                         // -> master index
//                 0  1  2    0  1  2    0  1  2                                      // -> inside index
const numbers = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(numbers[1][2]);                                                           // -> how to display the number 6 on the second array, [first master index][second inside index]
const [,[,,index2]] = numbers;                                                        // -> assigning a value that's inside of the array
console.log(index2);                                                                  // -> printing also 6, the same index of the last console.log


/* Atribution via disruption

// ... rest operator, ...spread operator
const numbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [indexOne, , indexThree, , indexFive, , indexSeven] = numbers;
console.log(indexOne, indexThree, indexFive, indexSeven);
*/