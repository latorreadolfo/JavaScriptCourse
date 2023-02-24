/*   //       Creating and object with 3 properties and giving it a function call using ${this.} to access the properties

const alien = {
    class: 'Basilic',
    planet: 'Mars',
    age: 2873,

    speaks() {
        console.log(`One ${this.class} Alien from ${this.planet} is waving and says: Hello my dearest filthy humans!`);
    }
};

alien.speaks();
*/


/*   //       Creating a factory function to create an object with 3 properties

function createProfile (name, last_name, age) {                     // -> Here: name, last_name and age are PARAMETERS
    return{name, last_name, age};
}

const user1 = createProfile('John', 'Doe', 25);                     // -> Here: name(John), last_name(Doe) and age(25) are ARGUMENTS
const user2 = createProfile('Stevenson', 'Baxter', 35);
const user3 = createProfile('Richard', 'Gomez', 21);
const user4 = createProfile('Mishelle', 'Zhung', 28);

console.log(user1.last_name, user1.name, user1.age);
console.log(user2.last_name, user2.name, user2.age);
console.log(user3.last_name, user3.name, user3.age);
console.log(user4.last_name, user4.name, user4.age);
*/


/*   //       Creating an object with 2 properties


const guy1 = {
    name: 'Louis',
    age: 25
};

console.log(guy1.name);
console.log(guy1.age);
*/