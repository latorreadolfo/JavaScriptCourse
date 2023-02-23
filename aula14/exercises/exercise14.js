const nam3 = prompt('Type your full name: ');

document.body.innerHTML += `Your name is: <strong>${nam3} </strong><br />`;
document.body.innerHTML += `Your name has <strong>${nam3.length} letters. </strong> (counting spaces)<br />`;
document.body.innerHTML += `Your name's second letter is: <strong>${nam3[1]} </strong><br />`;
document.body.innerHTML += `The first 'a' index in your name is at: <strong>${nam3.indexOf('a')} </strong><br />`;
document.body.innerHTML += `The last 'e' index in your name is at: <strong>${nam3.lastIndexOf('e')} </strong><br />`;
document.body.innerHTML += `Your name's last 3 letters are: <strong>${nam3.slice(-3)} </strong><br />`;
document.body.innerHTML += `Your name's words are: <strong>${nam3.split(' ')} </strong><br />`;
document.body.innerHTML += `Your name in UPPER CASE: <strong>${nam3.toUpperCase()} </strong><br />`;
document.body.innerHTML += `Your name in lower case: <strong>${nam3.toLowerCase()} </strong><br />`;



// <strong> </strong>