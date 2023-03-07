function Profile(name, lastname) {
    this.name = name;
    this.lastname = lastname;
    this.fullName = () => 'ORIGINAL: ' + this.lastname + ', ' + this.name;
}

Profile.prototype.fullName = function () {
    return this.lastname + ', ' + this.name;
};

const pf1 = new Profile('Matthew', "O'Hiley");
// Profile.prototype === pf1.__proto__
// chain of event : pf1 --> Profile.prototype --> Object.prototype
const pf2 = new Profile('Robert', 'Newmann');

console.log(pf1.fullName());