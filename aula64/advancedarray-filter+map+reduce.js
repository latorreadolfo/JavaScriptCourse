// Return the sum of the double of every pair number
// -> Filter the pairs
// -> Double the values
// -> Reduce (sum everything)


const numbers = [24, 42, 21, 53, 3, 5, 2, 1, 10, 11, 53, 21, 5, 2, 9];



const pairsDoubleSum = numbers
    .filter(value => value % 2 === 0)                                   // filtering the pairs
    .map(value => value * 2)                                            // double the  value
    .reduce((acumulator, value) => acumulator + value);                 // sum all the double values


console.log(pairsDoubleSum);


