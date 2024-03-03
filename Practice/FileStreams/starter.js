const fs = require('fs');
const zlib = require('zlib')

const gzip = zlib.createGzip();


const readStream = fs.createReadStream('./lorem.txt', 'utf8');

const writeStream = fs.createWriteStream('writeLorem.gz');


readStream.pipe(gzip).pipe(writeStream);