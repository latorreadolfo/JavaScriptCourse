function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.ceil(r);
}
const min = 1;
const max = 50;


let rand = randomNumber(min, max);

while (rand !== 10) {
    rand = randomNumber(min, max);
    console.log(rand);
}

// do {
//     console.log(rand);
// } while(rand !== 10);



/*                                      // -> using while to check through index numbers
let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}
*/

/*                                      // -> using while to check through a string
const randomName = 'Mike Myers';

let i = 0;

while (i < randomName.length) {
    console.log(randomName[i]);
    i++;
}
*/