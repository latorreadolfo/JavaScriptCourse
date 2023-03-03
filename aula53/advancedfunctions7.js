//      -> Factory Function example
function createProfile(name, lastname, height, weight) {
    return {
        name,
        lastname,

        // -> Getter
        get fullName() {
            return `${this.name} ${this.lastname}`;
        },

        // -> Setter
        set fullName(value) {
            value = value.split(' ');
            this.name = value.shift();
            this.lastname = value.join(' ');
        },

        say(subject) {
            return `${this.name} is ${subject}.`;  
        },

        height: height,
        weight: weight,
        // \/ GETTER below
        get bmi() {
            const index = this.weight / (this.height **2);
            return `Your BMI is: ${index.toFixed(2)}.`;
        }
    };
}

const profile1 = createProfile('Anne', 'Thompson', 1.75, 65);

profile1.fullName = 'John Doe Hartmann';        // -> setting a getter new value
console.log(profile1.fullName);
console.log(profile1.bmi);

const profile2 = createProfile('Richard', 'Nelson', 1.85, 85);
console.log(profile2.lastname);
console.log(profile2.name);
console.log(profile2.bmi);