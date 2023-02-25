const numb3r = 10;


if (numb3r >= 0 && numb3r <= 5) {
    console.log(`the number is between 0 and 5.`);                                      // -> as our number is 10, this wouldn't apply
} else if ( numb3r >= 6 && numb3r <= 8) {
    console.log(`the number is between 6 and 8`);                                       // -> as our number is 10, this wouldn't apply
} else if ( numb3r >= 6 && numb3r <= 8) {                                               // -> as our number is 10, this wouldn't apply
    console.log(`the number is between 6 and 8`);
} else if ( 1 === 1 ) {
    console.log(`Logic is picking the first true value no matters what :)`);            // -> so, as the logic picks the first true condition, this would execute and get out of the entire if
} else if ( numb3r >= 9 && numb3r <= 11) {
    console.log(`the number is between 9 and 11`);                                      // -> despite of obviously being the correct answer, would not print 'cause we have a previous true condition
} else if ( numb3r === 10 ) {
    console.log(`Correct, despite this text would never print`);
}else{ 
    console.log(`out of range.`)
}