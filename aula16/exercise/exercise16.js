const userNumber = Number(prompt('Type your number: '));
const title_number = document.getElementById('title-number');
const text = document.getElementById('text1');

title_number.innerHTML = userNumber;
text.innerHTML = '';
text.innerHTML += `<p>Square Root = <strong>${userNumber ** 0.5} </strong></p>`;
text.innerHTML += `<p>Is your number Integer = <strong>${Number.isInteger(userNumber)}</strong></p>`;
text.innerHTML += `<p>Is your number NaN = <strong>${Number.isNaN(userNumber)}</strong></p>`;
text.innerHTML += `<p>Rounding down: <strong>${Math.floor(userNumber)} </strong></p>`;
text.innerHTML += `<p>Rounding up: <strong>${Math.ceil(userNumber)} </strong></p>`;
text.innerHTML += `<p>With two decimal cases: <strong>${userNumber.toFixed(2)} </strong></p>`;



