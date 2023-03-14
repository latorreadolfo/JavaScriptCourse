exports.homePage = (request, response) => {
    response.send(`
    <form action="/" method="POST">
    Name: <input type="text" name="name">
    <button>Send</button>
    </form>`);
};

exports.dealPost = (request, response) => {
    response.send(`Hey, I'm your newest POST route.`);
};