const students = ['Louis', 'John', 'Annie'];




// console.log(typeof students);               // it would print as an object, 'cause array IS an object
// console.log(students instanceof Array);     // it would confirm if this const is an instance of an array


// students.push('Edward');
// students.push('Stewart');
// console.log(students.slice(0, 4));      // ->it cuts a section from 0 to 4
// console.log(students.slice(0, -2));      // -> subs 2 items from the end of the array

// delete students[1];         // -> it would delete the value in the index 1 of the array and leaving an empty item


// students.pop();                             // -> it would delete the value in the last index of the array
// const removedStudent = students.pop();      // -> it would delete the value in the last index of the array but save in another value "removedStudent"
// students.shift();                           // -> it would delete the value in the first index of the array
// const removedStudent = students.pop();      // -> it would delete the value in the first index of the array but save in another value "removedStudent"

// students.unshift('Stewart');    // -> it would add a new value at the beginning of the array
// students.unshift('Edward');     // -> it would add a new value at the beginning of the array


// students.push('Edward');        // -> it would add a new value at the end of the array
// students.push('Stewart');       // -> it would add a new value at the end of the array


// students[students.length] = 'Edward';       // -> it would add a new value at the end of the array
// students[students.length] = 'Stewart';      // -> it would add a new value at the end of the array
// students[students.length] = 'Richard';      // -> it would add a new value at the end of the array


// students[0] = 'Edward';    // -> it would change the value at the index 0
// students[3] = 'Stewart';   // -> it would add a value at the index 3


// console.log(students);     // -> it would print the entire array
// console.log(students[0]);  // -> should print 'Louis'
// console.log(students[2]);  // -> should print 'Annie'