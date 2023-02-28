function fizzBuzz(n) {
    if (isNaN(n) === true) return n;
    if (n % 5 === 0 && n % 3 === 0) return 'FizzBuzz'
    if (n % 5 === 0) return `Buzz`; 
    if (n % 3 === 0) return `Fizz`;
    else return n;
}
console.log(fizzBuzz('cesar'));


list = 1;

while (list <= 100) {
    console.log(list, fizzBuzz(list));
    list++;
}