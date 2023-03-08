const speak = {
    speak() {
        console.log(`${this.name} is speaking.`);
    },
};

const eat = {
    eat() {
        console.log(`${this.name} is eating.`);
    },
};

const drink = {
    drink() {
        console.log(`${this.name} is drinking.`);
    },
};

const profilePrototype = Object.assign({}, speak, eat, drink);

function createProfile(name, lastname) {
    return Object.create(profilePrototype, {
        name: { value: this.name },
        lastname: { value: lastname }
    });
}

const profile1 = createProfile('John', 'Glenn');
const profile2 = createProfile('Erica', 'Martinez');