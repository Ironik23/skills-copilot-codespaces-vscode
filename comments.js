// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.
// The file is located in the same directory as comments.js.

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./comments.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    });
}).listen(3000, () => console.log('Server is listening on port 3000'));