const fs = require('fs');

fs.rename('../writefile/chris.txt', '../writefile/queenett.txt', (err) => {
    if(err) throw err
    else{
        console.log("renamed successfully");
        fs.appendFile("genGhana.txt", "\nIm all in for this one.", (err) => {
            if(err) throw err
            console.log("file updated successfully");
        });
    }
    

});