const fs = require('fs')

const readStream = fs.createReadStream('./lorem.txt', 'utf8');

const writeStream = fs.createWriteStream('writeLorem.txt');
readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});