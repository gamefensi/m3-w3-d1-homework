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
            fileUrl = '/home.html';
        }
        
        var filePathNoHtml = path.resolve('./public' + fileUrl + '.html');
        var filePath = path.resolve('./public' + fileUrl)
        var fileExt = path.extname(filePath);
        console.log(filePath);

        if (fileUrl === '/home') {
            fs.access (filePathNoHtml, function(err) {
                if (err) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(`<html><body><h1>Error 404: ${fileUrl} 
                            not found</h1></body></html>`);
                    
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePathNoHtml).pipe(res);
            });

        } else if (fileUrl ==='/about') {
            fs.access (filePathNoHtml, function(err) {
                if (err) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(`<html><body><h1>Error 404: ${fileUrl} 
                            not found</h1></body></html>`);
                    
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePathNoHtml).pipe(res);
            });
        } else if (fileUrl === '/contact') {
            fs.access (filePathNoHtml, function(err) {
                if (err) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(`<html><body><h1>Error 404: ${fileUrl} 
                            not found</h1></body></html>`);
                    
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePathNoHtml).pipe(res);
            });
    } else if (fileExt === '.html') {
        fs.access (filePath, function(err) {
            if (err) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                res.end(`<html><body><h1>Error 404: ${fileUrl} 
                        not found</h1></body></html>`);
                
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            fs.createReadStream(filePath).pipe(res);
        });
    }
    
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><h1>Request Invalid!</h1></body></html>`)
    }
}
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
