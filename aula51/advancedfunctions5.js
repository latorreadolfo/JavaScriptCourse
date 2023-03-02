//                                  -> using callback functions

function randomTime(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function () {
        console.log('F1');
        if (callback) callback();
    }, randomTime());
}

function f2(callback) {
    setTimeout(function () {
        console.log('F2');
        if (callback) callback();
    }, randomTime());
}

function f3(callback) {
    setTimeout(function () {
        console.log('F3');
        if (callback) callback();
    }, randomTime());
}
f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log(`Hello World, I'm the las one :)`);
}


/*          -> callback old pattern
f1(function () {
    f2(function () {
        f3(function () {
            console.log("Hello World, I'm the last one.");
        });
    });
});
*/