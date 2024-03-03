const fs = require('fs');

// fs.unlink('./Practice/FileStreams/starter.js', (err) => {
//     if(err) throw err
//     console.log("starter file deleted");
// });


fs.rmdir('./Practice/FileStreams', (err) => {
    if(err) throw err
    console.log("folder deleted");
});


fs.mkdir('./Practice/FileStreams', (err) =>{
    if(err) throw err
    console.log("folder created");

    fs.writeFile('./Practice/FileStreams/starter.js',"const fs = require('fs')", (err) => {
        if(err) throw err
        console.log('File created');
    });
   
    fs.writeFile('./Practice/FileStreams/lorem.txt',"lorem", (err) => {
        if(err) throw err
        console.log('Lorem file created');
    });


});

