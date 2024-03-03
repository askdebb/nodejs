const fs = require('fs');
const zlib = require('zlib');

const gunzip = zlib.createGunzip();

const readStream = fs.createReadStream('./writeLorem.gz');
const writeStream = fs.createWriteStream('newLorem.txt');

readStream.pipe(gunzip).pipe(writeStream);