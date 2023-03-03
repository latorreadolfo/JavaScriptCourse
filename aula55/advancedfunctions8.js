// Constructor function -> objects -> declaration in Uppercase
// Factory function -> objects
function Profile(name, lastname) {
    const ID = 123412;
    const internMethod = function() {

    };
    this.name = name;
    this.lastname = lastname;
}


const p1 = new Profile('Anne', 'Marie');
const p2 = new Profile('Victor', 'Holtz');

console.log(p1);
console.log(p2);