const http = require('http');

http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk.toString());
    }).on('end', () => {
        body = Buffer.concat([body]).toString();
        console.log("body:", body);
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(' Hello World\n');
    })
}).listen(8088);

console.log("server started");



// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('你好世界\n')
// })

// server.listen(port, hostname, () => {
//     console.log(`服务器运行在 http://${hostname}:${port}/`)
// })