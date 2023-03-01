function showHour() {
    let date = new Date();

    return date.toLocaleTimeString('en-US', {
        hour12: false
    });
}

const timer = setInterval(function() {
    console.log(showHour());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 5000);

setTimeout(function() {
    console.log("I'm 10 seconds late :(")
}, 10000);