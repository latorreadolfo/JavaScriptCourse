
//         ***primitives (immutable):***
// string, number, boolean, undefined, null (bigint, symbol)

/*     // Example of immutable:

let nam3 = 'Louis';
nam3[0] = 'R';                     // -> this should change the value at the index 0 from 'L' to 'R'
console.log(nam3[0], nam3);        // -> here we can see that the value didn't change, 'cause is IMMUTABLE at leats you change the entire value for another
*/


/*    // Example of a COPY:

let a = 'A';
let b = a;                         // -> actually b is copying the value from a, now both have the same value
console.log(a, b);                 // -> just printing what we were already expecting

a = 'Random Stuff';                // -> the "a" value has changed, but the original "a" value was copied before to "b"
console.log(a, b);                 // -> so now would print | Random Stuff A |
*/


/*   // Example of ***Referency (mutable):***  array, object, function

let a = [1, 2, 3];                  // -> defining original values in the memory
let b = a;                          // -> copying values from a to b
// -> b = [...a];                   // -> with this you can actualyl copy the value from "a", not just referencying
console.log(a, b);                  // -> showing the same value for both

a.push(4);                          // -> adding a new value to "a" but this directly affects "b" 'cause both point to the same memory location
console.log(a, b);                  // -> showing the same value for both

b.pop();                            // -> trying to remove just from "b" the last value, but again affects "a" 'cause both point to the same memory location
console.log(a, b)                   // -> showing the same value for both
*/
