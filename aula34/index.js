const randomGuy = {
    nam3: 'Louis',
    last_name: 'Rogers',
    age: 29,
    address: {
        street: 'Johnson Av',
        number: '382'
    }
};

// ATRIBUTION VIA DISRUPTION

const { nam3, last_name} = randomGuy;
const { address: { street, number}} = randomGuy;
console.log(nam3, last_name);
console.log(number, street);