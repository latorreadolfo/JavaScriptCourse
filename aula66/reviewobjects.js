// Construction Function to create a profile

function Profile(name, lastname) {
    this.name = name;
    this.lastname = lastname;

  //  Object.freeze(this) // this could lock this value to prevent any future mistake edit from this point and below
}

const p1 = new Profile('Pam', 'Halpert');
console.log(p1);


/* // -> Factory Function to create a profile

function createProfile(name, lastname) {
    return {
        name,
        lastname,
        get fullName() {
            return `${this.lastname}, ${this.name}`;
        }
    };
}

const p1 = createProfile('Pam', 'Halpert');
console.log(p1.fullName);
*/


/* //  -> creating an object with function keys

const profile1 = new Object();
profile1.name = 'Jim';
profile1.lastname = 'Halpert';
profile1.age = 32;
profile1.sayName = function () {
    return (`Hi, my name is ${this.name} ${this.lastname}... how about you?`);
};
profile1.getBirthDate = function() {
    const liveDate = new Date();
    return liveDate.getFullYear() - this.age;
};

console.log(profile1.sayName());
console.log(profile1.getBirthDate());
*/


/* // ->  EXAMPLE CREATING AN OBJECT
const profile1 = new Object();                          // Profile1 and Profile2 are the same thing, but built in different ways
profile1.name = 'Jim';
profile1.lastname = 'Stevens';

const profile2 = {
    name: 'Jim',
    lastname: 'Stevens'
};


console.log(profile1, profile2);
*/