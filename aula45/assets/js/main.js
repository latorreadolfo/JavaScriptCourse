function stopwatch() { 
function getTimeinSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}


const clock = document.querySelector('.clock');
let seconds = 0;
let timer;


function startsClock() {
    timer = setInterval(function () {
        seconds++;
        clock.innerHTML = getTimeinSeconds(seconds);
    }, 1000);
}

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('start')) {
        clock.style.color = 'black';
        startsClock();
    }

    if (el.classList.contains('pause')) {
        clearInterval(timer);
        clock.style.color = 'red';
    }

    if (el.classList.contains('restart')) {
        clearInterval(timer);
        clock.innerHTML = '00:00:00';
        clock.style.color = 'black';
        seconds = 0;
    }
});
}
stopwatch();
