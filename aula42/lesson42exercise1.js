function max (num1, num2) {
    return num1 > num2 ? num1 : num2;
}

const maxShort = (x, y) => {
    return x > y ? x : y;
};

const maxShortest = (x, y) => x > y ? x : y;

console.log('####### max function');
console.log(max(24, 53));
console.log('####### max short function');
console.log(maxShort(53, 24));
console.log('####### max shortest function');
console.log(maxShortest(53, 24));