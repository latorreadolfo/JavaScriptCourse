function randomMachine(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function delayMachine(msg, time) {
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

async function runThis() {
    try {
        const stage1 = await delayMachine('First Stage', randomMachine(0, 3));
        console.log(stage1);

        const stage2 = await delayMachine('Second Stage', randomMachine(0, 3));
        console.log(stage2);

        const stage3 = await delayMachine('Third Stage', randomMachine(0, 3));
        console.log(stage3);

        console.log('Finished on stage:', stage3);
    } catch(e) {
        console.log(e);
    }
}

runThis();

// Promise state

// 1 - pending
// 2 - fullfilled
// 3 - rejected