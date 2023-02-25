/* 

        ***LOGIC OPERATORS***
        
        && -> AND
        || -> OR
        !  -> NOT

*/
/* EXAMPLES

console.log(true && true && true && true);              // -> this should print true, 'cause all of the arguments are true
console.log(true && true && false && true);             // -> this should print false, 'cause ONE of the arguments is false

console.log(true || false);                             // -> this should print true, 'cause ONE of the argument is true
console.log(false || false);                             // -> this should print false, 'cause both arguments are false

console.log(!true)                                      // -> this should print false due to a deny before true
console.log(!false)                                      // -> this should print true due to a deny before false
console.log(!!true)                                      // -> this should print true due to a 2 deny before true
console.log(!!false)                                      // -> this should print false due to a 2 deny before false
*/

/*      PRACTICAL EXAMPLE
const userInput = 'Robert';          // -> user input form
const pwrdInput = '12345';           // -> user input form

const userDatabase = 'Robert';
const pwrdDatabase = '12345';

const logIn = userInput === userDatabase && pwrdInput === pwrdDatabase;
// -> due to both comparison are true, should print TRUE. If one of these were false, the output would be false
console.log(logIn);
*/