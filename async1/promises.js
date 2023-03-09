function randoM(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function delay(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD INPUT VALUE');
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

delay('Connecting with DB...', randoM(1, 3))
    .then(answer => {
        console.log(answer);
        return delay('Searching for data in DB...', randoM(1, 3));
    })
    .then(answer => {
        console.log(answer);
        return delay(222, randoM(1, 3));
    })
    .then(answer => {
        console.log(answer)
    }).then(() => {
        console.log(`Show data on user's screen`);
    })
    .catch(e => {
        console.log(`wrong input:`, e);
    });