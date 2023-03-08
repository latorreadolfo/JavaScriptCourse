class Profile {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    speak() {
        console.log(`${this.name} is speaking.`);
    }
}
// replica with Constructor
function Profile2(name, lastname) {
    this.name = name;
    this.lastname = lastname;
}

Profile2.prototype.speak = function() {
    console.log(`${this.name} is speaking.`);
}

const profile1 = new Profile('Denis', 'Armstrong');
const profile2 = new Profile('Robert', 'Hudson');
const profile3 = new Profile('Matthew', 'Halpert');

