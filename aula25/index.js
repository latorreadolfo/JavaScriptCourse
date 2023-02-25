function getRandomIntInclusive(min, max) {                          // -> creating a factory function to give a random Int number between min and max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

const inputTime = getRandomIntInclusive(0, 24);                     // -> calling the function with a range of 0 to 24
console.log(`The time was: ${inputTime}`);                          // -> just monitoring the output of the factory function


if (inputTime >= 6 && inputTime <= 11) {                              // -> defining the first parameter, starting with if
    console.log('Good Morning, Sir!');
}else if (inputTime >= 12 && inputTime <= 17) {                        // -> giving another extra parameter, using else if ( p a r a m e t e r ). 
    console.log('Good Afternoon, Sir!');
}else if (inputTime >= 18 || inputTime <= 5) {                                                              // -> ending with else, 'cause if nothing else, this would execute xD
    console.log('Good Evening, Sir!');
}else{
    console.log('out of range');
}

