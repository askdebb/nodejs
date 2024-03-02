const fs = require('fs');

fs.appendFile('../writefile/chris.txt', `\nTonight is gonna be a good night`, (err) => {
    if(err) throw err
    console.log("file modified successfully");
});
