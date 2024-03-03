const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    // static html file
    // const readableStream = fs.createReadStream('./static/index.html');
    // res.writeHead(200, {'Content-type': 'text/html'});
    // readableStream.pipe(res);

    // load json file
    // const readableStream = fs.createReadStream('./static/file.json');
    // res.writeHead(200, {'Content-type': 'application/json'});
    // readableStream.pipe(res);

    // load asset files : image
    const readableStream = fs.createReadStream('./static/birthday.png');
    res.writeHead(200, {'Content-type': 'image/png'});
    readableStream.pipe(res);
});


server.listen('3000');