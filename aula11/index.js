/* 
    arithmetic operators:
    -> +  sum/concatenation
    -> -  sub
    -> *  multiplier
    -> ** potentiation
    -> /  divider
    -> %  division leftover
    -> ++ increase 1 each time (tip: could be before or after the declaration, but this affect WHEN the increase would happen)
    -> -- decrease 1 each time (tip: same idea)
    -> += sum and assigns
    -> -= subtract and assigns
    -> *= multiply  "    "
    -> /= divide    "    "
    -> ** potentiate "    "

    priority:
    1 -> ()         parenthesis
    2 -> **         potentiation
    3 -> * / %      multiply, divide, division leftover
    4 -> + -        add, sub

    NaN: Not a number.

    const num = parseInt('number') convertion from string to number
    const num = parseFloat('number') convertion from string to a float number
    const num = Number('number') modern style of convertion, fits for both cases, entire and float number
*/

const num = 3;
const num1 = 18;
const num2 = 5;
const randomText = ' Brasseurs';

console.log(`***SUM*** = ${num} + ${num1}:`);
console.log(num + num1);                 //addition
console.log(`***CONCATENATION*** => Le + ${num} +${randomText}. :`);
console.log('Le', num + randomText);     //concatenation
console.log(`***SUBTRACT*** => ${num1} - ${num}:`);
console.log(num1 - num);                 //subtraction
console.log(`***MULTIPLY*** => ${num} * ${num1}:`);
console.log(num * num1);                 //multiplication
console.log(`***POTENTIATE*** => ${num1} ^${num}":`);
console.log(num1 ** num);                //potentiation
console.log(`***DIVIDE*** => ${num1} / ${num}:`);
console.log(num1 / num);                 //division
console.log(`***DIVISION LEFTOVER*** => ${num1} % ${num}:`);
console.log(num1 % num);                 //division leftover (in this case, should be 0, 'cause 18 has exactly 6 times 3)
console.log(`***DIVISION LEFTOVER*** => ${num2} % ${num}:`);
console.log(num2 % num);                 //division leftover (in this case, should be a value)
