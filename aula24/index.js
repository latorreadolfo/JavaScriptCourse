/*      *** LOGIC OPERATORS REVIEW and FALSY values:
&& -> all true to be true
|| -> all false to be false

FALSY values:       // despite of this values, all the rest is granted as true in JavaScript!!

-> false                // -> this obviously is false, this actually is the absolute false.
-> 0                    // -> zero is taken as false
-> '';  "";  ``;        // -> empty declarations are granted as false
-> null / undefined     // -> null and undefined are both granted as false
-> NaN                  // -> Not a Number also is granted as false
*/

console.log(0 || false || null || 'Adolfo' || true);            // -> this would print 'Adolfo' 'cause it reads the first true argument and stops
console.log('Africa' && 'Oceania' && true && NaN);              // -> this would print 'NaN''cause it's the first false value and stops
console.log('Africa' && 'Oceania' && true && 'Europe');         // -> this would print 'Europe''cause it's the last true value and stops

let selectedUserColor = '';                                     // -> leaving an empty argument (count as false)
let defaultColor = selectedUserColor || 'Gray';                 // -> defining an OR operator, in case of the user didn't had selected any color, would be defined as 'Gray'

console.log(defaultColor);                                      // -> here we can check it

selectedUserColor = 'Cyan';                                     // -> defining selectedUserColor as Cyan
defaultColor = selectedUserColor || 'Gray';
console.log(defaultColor);                                      // -> here we can check it