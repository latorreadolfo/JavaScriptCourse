exports.homePage = (request, response) => {
    response.render('index');
};

exports.dealPost = (request, response) => {
    response.send(`Hey, I'm your newest POST route.`);
};