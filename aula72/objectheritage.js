// create a Constructor for Products and has rise and discount fee
// create a Constructor for Shirts, and for Mugs, cause shirts has color value and mugs has material value

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.rise = function(fee) {
    this.price += fee;
};
Product.prototype.discount = function(fee) {
    this.price -= fee;
};

function Shirts (name, price, color) {
    Product.call(this, name, price);
    this.color = color;
}
Shirts.prototype = Object.create(Product.prototype);
Shirts.prototype.constructor = Shirts;

const randomProduct = new Product ('Generic', 30);
const tankTshirt = new Shirts('Tank top', 25, 'Blue Navy');
console.log(tankTshirt);

function Mugs (name, price, material, stock) {
    Product.call(this, name, price);
    this.material = material;
    
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: function() {
            return stock;
        },
        set: function(value) {
            if (typeof value !== 'number') return;
            stock = value;
        }
    });
}
Mugs.prototype = Object.create(Product.prototype);
Mugs.prototype.constructor = Mugs;

const mickeyMug = new Mugs('Disney Mickey Mug', 20, 'Ceramic', 4);
mickeyMug.discount(10);
mickeyMug.stock = 15;
console.log(mickeyMug, `It has ${mickeyMug.stock} in stock`);
console.log(randomProduct);