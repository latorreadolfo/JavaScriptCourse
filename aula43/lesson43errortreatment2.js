function hourFeedback(date) {
    if (date && !(data instanceof Date)) {
        throw new TypeError('Waiting for date stance.');
    }

    if (!date) {
        date = new Date();
    }

    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const date = new Date('01-01-1970 12:45:45');
    const hour = hourFeedback();
    console.log(hour);
} catch(e) {
    // treat error
} finally {
    console.log('Have a good one!');
}

/*
try {
    console.log('Opens a file');
    console.log('Manipulates a file');
    console.log('Closes a file');

    try {
        console.log(obviouserror);
    } catch (e) {
        console.log('Generated a catch error in this try catch');
    } finally {
        console.log("I'm a finally too, Muahaha");
    }
} catch (e) {
    console.log('Dealing with the error...');
} finally {
    console.log('FINALLY: I am always executed, no matters what');
}*/