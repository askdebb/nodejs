const fs = require('fs');

// create file
fs.writeFile('chris.txt','chris is pre-approved', (err) => {
    if(err) throw err

    console.log("file created successfully");
});

fs.writeFile('queenett.txt','Queenette please approve me wai', (err) => {
    if(err) throw err

    console.log("file created successfully");
});


