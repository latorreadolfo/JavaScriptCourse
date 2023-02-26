// TERNARY Operator

// (condition) ? 'True value' : 'False value';

const userScore = 1000;

// if (userScore >= 1000) {                                                         // -> alternative solution using if and else
//     console.log('VIP User');
// } else {
//     console.log('Normal User');
// }

const userLevel = userScore >= 1000 ? 'VIP User' : 'Normal User';                   // -> ternary operator solution doing the same logic

console.log(userLevel);

