const http = require('http');
const server = http.createServer(myServer);
const routes = [
    { path: '/', controller: home },
    { path: '/about', controller: about }
];

function myServer(request, response) {
    let matchedRoute = false;

    for (let route of routes) {
        if (route.path === request.url) {
            route.controller(request, response);
            matchedRoute = true;
        }
    }
    if (matchedRoute === false) {
        err(request, response);
    }
}

function err(req, res) {
    res.writeHead(404);
    res.end(`<h1>Oops ! Error 404</h1><p>${req.url}</p>`);
}

function home(req, res) {
    res.writeHead(200);
    res.end('<h1>Home page</h1>')
}

function about(req, res) {
    res.writeHead(500);
    res.end('<h1>About page</h1>')
}

server.listen(3000, () => {
    console.log('server is running on localhost:3000');
});