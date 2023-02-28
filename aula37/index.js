const profile = {
    nam3: 'Richard',
    lastname: 'Benson',
    age: 35
};

for (let key in profile) {                                              // -> for every element or key in the object{} do something
    console.log(`${key}: ${profile[key]}`);
}


/*
const fruits = ['Apple', 'Grape', 'Lemon', 'Strawberry'];

for (let i in fruits) {                                                 // -> for every element or index in the array[] do something
    console.log(fruits[i]);
}
*/