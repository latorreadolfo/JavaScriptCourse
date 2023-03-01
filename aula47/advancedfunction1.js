//                          -> Functions are first-class objects in JavaScript
sayHi();

//                          -> Normal Function 
function sayHi() {
    console.log('Hello!');
}

//                          -> Function Expression with declaration
const imAData = function () {
    console.log(`I'm a data!`);
};
imAData();

//                          -> Arrow Function
const functionArrow = () => {
    console.log(`I'm an Arrow Function.`);
};
functionArrow();

//                          -> Inside an object
const obj = {
    speak() {
        console.log(`I'm speaking...`);
    }
};
obj.speak();