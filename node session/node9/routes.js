const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');


// HOME ROUTES
route.get('/', homeController.homePage);
route.post('/', homeController.dealPost);


module.exports = route;