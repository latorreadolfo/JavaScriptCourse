const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                                                                    // -> "continue;" jumps to the next iteration of the loop
                                                                    // -> "break;" quit the loop


for (n of numbers) {
    if (n === 2) {
        console.log("I've jumped number 2");
        continue;
    }

    console.log(n);

    if (n === 7) {
        console.log('7 was found!, exiting...');
        break;
    }
}


