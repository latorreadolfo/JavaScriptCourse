function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    
    let privateStock = stock;
    Object.defineProperty(this, 'stock', {
        enumerable: true,  // shows the key
        configurable: true, // configurable
        get: function () {
            return privateStock;
        },
        set: function (value) {
            if (typeof value !== 'number') {
                throw new TypeError('Bad input');
            }

            privateStock = value;
        }
    });
}

const p1 = new Product('T-Shirt', 55, 12);
console.log(Object.keys(p1));
p1.stock = 34;
console.log(p1.stock);
