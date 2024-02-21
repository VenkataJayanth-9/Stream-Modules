//Design a Node.js server using the HTTP and FS modules to efficiently read the contents of a file ('example.txt') and stream it to another 
//file ('example2.txt'). when a client access the server root URL ('/')?"

const http = require('http');
const  fs = require('fs');

server = http.createServer((req, res) => {
    if(req.url === '/')
    {
        fs.readFile('example.txt', 'utf8', (err, data) => {
            if(err){
                console.error('Error while reading file', err);
                return;
            }
            const readStream = fs.createReadStream('example1.txt');
            const writeStream = fs.createWriteStream('example2.txt');

            readStream.on()

            res.writeHead('Content-Type','text/plain');
            res.end('Data:' + data);
        })
    }
});

const port = 5000;
server.listen(port, () => {console.log('listening on port')});