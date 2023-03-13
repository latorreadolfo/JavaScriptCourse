const express = require('express');
const app = express();


// CRUD -> CREATE | READ | UPDATE | DELETE
//          POST  |  GET |  PUT   | DELETE

app.get('/', (request, response) => {
    response.send(`
    <form action="/" method="POST">
    Name: <input type="text" name="name">
    <button>Send</button>
    </form>
    `);
});

app.post('/', (request, response) => {
    response.send('I got the form!');
});

app.get('/getintouch', (request, response) => {
    response.send('Thank you for passing by!');
});

app.listen(3000, () => {
    console.log('Server Running on Port: 3000');
    console.log('Access on http://localhost:3000');
});