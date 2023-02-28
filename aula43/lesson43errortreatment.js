function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError(`x and y needs to be a number, pal.`)
    }
    return x + y;
}

try {
console.log(sum(1, 2));
console.log(sum('1', 2));
} catch(e) {                    // -> this runs only if the section "try" has an error 
    // console.log(e);          // -> never show the error for the user, you must show this only for the backend
    console.log(`Error: Incredible friendly message for the User <3`);
}