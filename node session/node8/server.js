const express = require('express');
const app = express();
 
app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
);


app.get('/', (request, response) => {
    response.send(`
    <form action="/" method="POST">
    Name: <input type="text" name="name">
    <button>Send</button>
    </form>
    `);
});

app.get('/test/:idUser?/:parameter?', (request, response) => {
    console.log(request.params);
    console.log(request.query);
    response.send(request.query.userprofile);
})

app.post('/', (request, response) => {
    console.log(request.body);
    response.send(`What you sent was: ${request.body.name}`);
});


app.listen(3000, () => {
    console.log('Server Running on Port: 3000');
    console.log('Access on http://localhost:3000');
});