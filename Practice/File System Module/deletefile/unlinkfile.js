const fs = require ('fs');

fs.unlink('../writefile/queenett.txt', (err) => {
    if(err) throw err
    console.log("file deleted");
});