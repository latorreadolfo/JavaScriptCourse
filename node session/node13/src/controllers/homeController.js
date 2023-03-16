exports.homePage = (request, response, next) => {
    response.render('index');
};

exports.dealPost = (request, response, next) => {
    response.send(`Hey, I'm your newest POST route.`);
};