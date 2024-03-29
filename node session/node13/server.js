const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use( express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// OUR MIDDLEWARES
app.use(myMiddleware);
app.use(routes);




app.listen(3000, () => {
    console.log('Server Running on Port: 3000');
    console.log('Access on http://localhost:3000');
});