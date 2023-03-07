const product = {
    name: 'Mug',
    price: 23.99
};


const productSafeCopy = {
    ...product,
    material: 'porcelain'
};


const productSafeCopy2 = Object.assign({}, product, { material: 'porcelain' });


const productSafeCopy3 = { name: product.name, price: product.price, material: 'porcelain' };


// console.log(productSafeCopy);        // all of three shows the same obj value
// console.log(productSafeCopy2);
// console.log(productSafeCopy3);
console.log('**** KEYS ****');
console.log(Object.keys(productSafeCopy2));
console.log('**** VALUES ****');
console.log(Object.values(productSafeCopy2));
console.log('**** ENTRIES ****');
console.log(Object.entries(productSafeCopy2));

Object.defineProperty(product, 'name', {
    writable: false,
    configurable: false
});


console.log('**** PROPERTIES ****');
console.log(Object.getOwnPropertyDescriptor(product, 'name'));


for (let [key, value] of Object.entries(product)) {
    console.log(key, value);
}