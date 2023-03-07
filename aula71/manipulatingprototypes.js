function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function(percent) {
    this.price = this.price - (this.price * (percent / 100));
};

Product.prototype.rise = function(percent) {
    this.price = this.price + (this.price * (percent / 100));
};

const product1 = new Product("T-Shirt", 37.99);                             // creating an object through the Constructor Function.
product1.rise(10);
console.log(product1, "10% Price Rised");
product1.discount(30);
console.log(product1, "30% Discount");

const product2 = {
    name: 'Beach Chair',
    price: 24.50
};
Object.setPrototypeOf(product2, Product.prototype);                         // adding a prototype to the literal created object.

product2.discount(20);

console.log(product2, "Beach Chair with 20% discount!");

const product3 = Object.create(Product.prototype, {                         // Creating an object and setting the prototype.
    name: {
        writable: false,
        configurable: true,
        enumerable: true,
        value: 'Hat'
    },
    price: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 24.25
    }
});

product3.rise(50);
console.log(product3, "Hat with a 50% price rise");


/* // EXAMPLE OF PROTOTYPE CHAINING
// new Object -> Object.prototype
const objA = {
    keyA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    keyB: 'B'
    // __proto__: objA
};

Object.setPrototypeOf(objB, objA);
console.log(objB.keyA);
*/