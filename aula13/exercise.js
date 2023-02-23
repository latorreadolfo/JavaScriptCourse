let var1 = 'A';
let var2 = 'B';
let var3 = 'C';
let var1Temp = '';

var1Temp = var1;
var1 = var2;
var2 = var3;
var3 = var1Temp;

// [var1, var2, var3] = [var2, var3, var1]   -> fastest solution without creating a new var

console.log(var1, var2, var3);

