const fs = require('fs');

const readableStream = fs.createReadStream('stream module\\example.txt', { encoding: 'utf8', highWaterMark: 64})

readableStream.on('data', (chunk) => {
    console.log('Recevied chunk of data: ');
    console.log(chunk);
});

readableStream.on('end', () => {
    console.log('Finished reading data from the file.');
});

readableStream.on('error', (err) => {
    console.error('Error reading data:', err);
});