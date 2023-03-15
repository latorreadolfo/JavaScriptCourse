exports.homePage = (request, response, next) => {
 //   request.session.user = { name: 'John Doe', loggedIn: true };
    response.render('index');
    return;
};

exports.dealPost = (request, response, next) => {
    response.send(`Hey, I'm your newest POST route.`);
    return;
};