// const sum = (num1, num2) => num1 + num2;
// const PI = 3.14;
// class CodeBOLT{
//     constructor(){
//         console.log("My Brand Name");
//     }

// }
// // module.exports = sum;
// module.exports.sum = sum;
// module.exports.CodeBOLT = CodeBOLT;
// module.exports.PI = PI;

const fs = require('fs');

// fs.unlink('./Practice/MkDir/dirfile.txt', (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("file deleted");
//     //     fs.rmdir('./Practice/MkDir', (err) => {
//     //     if(err) throw err
//     //     console.log("folder deleted");
//     // });
//     }
        
    
// });

// fs.rmdir('./Practice/MkDir', (err) => {
//     if(err) throw err
//     console.log("folder deleted");
    
//     fs.mkdir('./Practice/MkDir', (err) => {
//         if(err) throw err
//         console.log('dir created successfully');
//         fs.writeFile('./Practice/MkDir/dirfile.txt', 'this file is in directory created',(err) => {
//             if(err) throw err
//             console.log('file created in MkDir successfully');
//         });
//     });
// });

// fs.readdir('./Practice/ReadDirFiles', (err, files) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(files);
//         for(let file of files){
//             fs.unlink(`./Practice/ReadDirFiles/${ file }`, (err) => {
//                 if(err) throw err
//                 console.log(`deleted ${ file } successfully`);
//             });
//         }

//     }
    
// });



fs.rmdir('./Practice/ReadDirFiles', (err) => {
    if(err) throw err
    console.log("ReadDirFiles folder deleted");
});




fs.mkdir('./Practice/ReadDirFiles', (err) => {
    if(err) throw err
    console.log('folder created');
    fs.writeFile('./Practice/ReadDirFiles/file1.txt','file 1',(err) => {
        if(err) throw err
        console.log('file 1 created');
    });
    fs.writeFile('./Practice/ReadDirFiles/file2.txt','file 2',(err) => {
        if(err) throw err
        console.log('file 2 created');
    });
    fs.writeFile('./Practice/ReadDirFiles/file3.txt','file 3',(err) => {
        if(err) throw err
        console.log('file 3 created');
    });

});



