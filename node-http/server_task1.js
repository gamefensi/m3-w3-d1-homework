const http = require('http');
var path = require ('path');
var fs = require ('fs');
const hostname = 'localhost';
const port = 5000;

const server = http.createServer((req, res) => {
    console.log(`The NodeJS server on port ${port} is now running....`);

    if (req.method === 'GET') {
        var fileUrl = req.url;
        if (fileUrl === '/') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Home Page.</h1></body></html>`);
        } else if (fileUrl ==='/about') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>About Page.</h1></body></html>`);
        } else if (fileUrl ==='/contact') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Contact Page.</h1></body></html>`);
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Invalid Request!</h1></body></html>`);
        }
        }
    });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
