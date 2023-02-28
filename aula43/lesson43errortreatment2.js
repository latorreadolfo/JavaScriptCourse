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
    console.log('FINALLY: I always execute, no matters what');
}