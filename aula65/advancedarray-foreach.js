const numbers = [24, 42, 21, 53, 3, 5, 2, 1, 10, 11, 53, 21, 5, 2, 9];

let total = 0;

numbers.forEach(value => {                                  // -> simulating a reduce function adding up all the values (numbers)
    total += value;
});

console.log(total);