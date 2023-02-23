let myString = "Je";

// concat options:

console.log(myString.concat(' me souviens.'));
console.log(myString + ' me souviens.');
console.log(`${myString} me souviens.`);

let myText = "Learning to code every day.";

console.log(myText.length);
console.log(myText.charAt(2));
console.log(myText.indexOf('c', 0));
console.log(myText.lastIndexOf('c', 27));
console.log(myText.match(/[a-z]/g));
console.log(myText.replace('day', 'night'));
console.log(myText.slice(-10));
console.log(myText.toUpperCase());
console.log(myText.toLowerCase());
console.log(myText.split(' '));