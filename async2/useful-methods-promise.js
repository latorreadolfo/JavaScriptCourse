function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function delay(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (typeof msg !== 'string') {
        reject(`ERROR BAD INPUT`);
        return;
        }

            resolve(msg);
            return;
        }, time);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject

function downloadPage(){
    const inCache = false;
    
    if(inCache) {
        return Promise.resolve('In Cache Page');            // Promise.reject will throw you in the .catch() method
    } else {
        return delay(`Page downloaded.`, 2000);
    }
}

downloadPage()
.then(dataPage => {
    console.log(dataPage)
})
.catch(e => console.log(e));

// Promise.race(promises)
// .then(function(value) {
//     console.log(value);
// })
// .catch(function(err) {
//     console.log(err);
// });


// const promises = [
//     delay('First Promise', rand(1, 3)),
//     delay('Second Promise', rand(1, 3)),
//     delay('Third Promise', rand(1, 3)),
//     delay(222, rand(1, 3))
// ];

/*      // Promise.all Example
Promise.all(promises)
.then(function(value) {
    console.log(value);
})
    .catch(function(err) {
        console.log(err);
    });
*/