/*

Comparison Operators:

> bigger than
>= bigger or equal
< lesser then
<= lesser or equal
== equality (value)                         <----(AVOID)
=== equality strict (value and class)
!= different of (value)                     <----(AVOID)
!== different of strict (value and class)

*/

const num1 = 10;
const num2 = '10';


console.log(num1 == num2);          // this should print 'true' even that is a number/string comparison
console.log(num1 === num2);         // this should print 'false' cause === has value and class comparison

console.log(num1 != num2);          // this should print 'false' even that is a number/string different of
console.log(num1 !== num2);         // this should print 'true' cause !== has value and class different of