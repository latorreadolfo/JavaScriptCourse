const randomname = ['Steven', 'Victor', 'Johnson'];

console.log('##### "classic for" example')
for (i = 0; i < randomname.length ; i++) {
    console.log(randomname[i], i)
}

console.log('##### "for in" example')
for (let i in randomname) {                                         // -> this is the equivalent using "for in"
    console.log(randomname[i], i)
}

console.log('##### "for of" example')
for (let value of randomname) {                                     // -> "for of" reads a value of the array or the object, not the index
    console.log(value);
}

console.log('##### ".forEach" example')
randomname.forEach(function(value, index) {                         // -> doing the same with ".forEach" JavaScript function
    console.log(value, index);
});



// -> "classic for loop" => fits better with iterable (array or string)
// -> "for in loop" => it returns you the index or the key (array, string or objects)
// -> "for of loop" => it returns you the value itself, works great with iterable (arrays or strings)