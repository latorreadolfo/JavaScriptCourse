function myScope () {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    const people = [];

    // form.onsubmit = function (event) {
    //     event.preventDefault();
    //     console.log('It was sent.');
    // };

    function event_receiver (event) {
        event.preventDefault();
        const nam3 = form.querySelector('.nam3');
        const last_name = form.querySelector('.last_name');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        people.push({
            nam3: nam3.value,
            last_name: last_name.value,
            weight: weight.value,
            height: height.value,
        });

        console.log(people);
        result.innerHTML += `<p>${nam3.value} ${last_name.value} ` +
        `${weight.value} ${height.value}</p>`;
    }

    form.addEventListener('submit', event_receiver);
}
myScope();

