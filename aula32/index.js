const trueValue = true;

// "let" has block scope {if we create a let var inside of blocks, it will create a new same variable let inside of the block}
// "var" has just function scope

let nam3 = 'Edward';                        // -> creating a let var called "nam3" with the value "Edward"
var nam32 = 'Edward';

console.log(nam32, nam3);

if (trueValue) {
    let nam3 = 'Stewart';                   // -> creating a let var called "nam3" but inside a block, in this block nam3 is Stewart
    console.log(nam32, nam3);

    if (trueValue) {                        // -> creating a let var called "nam3" but inside another block
        let nam3 = 'Mary';
        var nam32 = 'Johnson';              // -> here the var nam32 is being redeclared, we are changing the value even that var isn't in this entire function scope.
        console.log(nam32, nam3);
    }
}