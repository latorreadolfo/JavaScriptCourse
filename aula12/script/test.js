/*
        -> Functions used only in browser window

alert('Message');

window.confirm('Are you sure?');

window.prompt('Type your name: ');

*/

const booleanValue = confirm('Are you ready?');      // assigning a boolean value 

let userName = prompt('Type your name: ');          // assigning a value 

let inputNumber1 = prompt('Type your 1st number: ');     // assigning the 1st "string number" 
inputNumber1 = Number(inputNumber1);                  // converting 1st "string number" to a real number

let inputNumber2 = prompt('Type your 2nd number: ');     // assigning the 2nd "string number" 
inputNumber2 = Number(inputNumber2);                  // converting 2nd "string number" to a real number

sumOperation = inputNumber1 + inputNumber2;                     // assigning a sum operation
alert(`${userName}, Your Result is ${sumOperation}`);   // printing the results