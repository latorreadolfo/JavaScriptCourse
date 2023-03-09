// fetch('users.json')
//     .then(answer => answer.json())
//     .then(json => loadElements(json));

axios('users.json')
    .then(answer => loadElements(answer.data));

function loadElements(json) {
    const table = document.createElement('table');
    for(let user of json) {
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = user.name;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = user.age;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = user.wage;
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    const result = document.querySelector('.result');
    result.appendChild(table);
}