//  Object.defineProperty() defines just one key and Object.defineProperties() defines many keys.

function Product(name, price, storage) {
    Object.defineProperty(this, 'storage', {
        enumerable: true,  // shows the key
        value: storage,    // value
        writable: true,
        configurable: true // configurable
    });

    Object.defineProperties(this, {
        name: {
            enumerable: true,  // shows the key
            value: name,    // value
            writable: true,
            configurable: true
        },
        price: {
            enumerable: true,  // shows the key
            value: price,    // value
            writable: true,
            configurable: true
        }
    });
}

const p1 = new Product('T-Shirt', 55, 12);
console.log(Object.keys(p1));
console.log(p1);