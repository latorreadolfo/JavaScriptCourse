module.exports = class Dog {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }

    bark() {
        return `${this.name}: Woof, woof!`;
    }
}