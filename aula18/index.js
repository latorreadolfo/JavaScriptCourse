/*  SQUARE ROOT FUNCTION WITH "ARROW FUNCTION" -> easiest way for me

const sqroot = (n) => {         // -> it works with | const sqroot = n => n ** 0.5; | also, all in one line
    return n ** 0.5;
};
console.log(sqroot(9));
console.log(sqroot(16));
console.log(sqroot(25));
*/


/*  SQUARE ROOT FUNCTION    // -> in this case that a function is assigned to a variable, use ; at the end of the }

const sqroot = function (n) {
    return n ** 0.5;
};                          // -> See?

console.log(sqroot(9));
console.log(sqroot(16));
console.log(sqroot(25));

*/


/* SUM FUNCTION             // -> in this case that you just had declare the function without assigning to a variable, DON'T use ; at the end of the }

function sum(x, y) {
    const result = x + y;
    return result;
}                           // Here, can you see it? WITHOUT -> ;

console.log(sum(2, 2));
console.log(sum(3, 1));
console.log(sum(5, 10));

*/