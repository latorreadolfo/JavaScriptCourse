exports.middlewareGlobal = (request, response, next) => {
    response.locals.localVariable1 = 'This is the value of the Local Variable.';
    next();
};