         // -> generator function calling another generator function
function* generator1() {
    yield 0;
    yield 1;
    yield 2;
}

function* generator2() {
    yield* generator1();
    yield 3;
    yield 4;
    yield 5;
}

const g2 = generator2();
for(let value of g2) {
    console.log(value);
} 
