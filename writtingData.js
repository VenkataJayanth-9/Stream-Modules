const fs = require('fs');

const writableStream = fs.createWriteStream('stream module\\output.txt');

const data = ['Hello, my self Jayanth. Now this text is going to write into output file in the form of chunks.'];

data.forEach(chunk => {
    writableStream.write(chunk);
});

writableStream.on('finish', () => {
    console.log('Finished writing data to the file.');
});

writableStream.on('error', (err) => {
    console.error('Error writing data: ', err);
});

writableStream.end();
