const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const joi = require('joi');
const fs = require('fs');

const server = express();




// middleware
server.use(bodyParser.urlencoded({extended: false}));
server.use(express.static(path.join(__dirname, 'static')))

const schema = joi.object().keys({
    name: joi.string().trim().max(20).required(),
    gender: joi.string().required(),
    streetName: joi.string().required(),
    fruits: joi.string().required(),
    gpsPost: joi.string().required(),
});
server.get('/', (req, res) => {
    // res.send("this is home page");
    res.sendFile(path.join(__dirname, 'static', 'home.html'))
});


server.get('/u-data', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'userData.html'))
});


server.post('/', (req,res) => {
    const validateuserInput = schema.validate(req.body);
    // console.log(req.body);
    // console.log(validateuserInput);
    // console.log(validateuserInput.name);
    console.log(validateuserInput.value.name);

    const buff = new Buffer.from(JSON.stringify(validateuserInput));
    console.log(buff.toString());
    if(path.join(__dirname,'./userDataComplete.txt')){
        fs.appendFile('./userDataComplete.txt', `\n ${ buff }`  , (err) => {
            if(err) throw err
            console.log("file updated successfully");
        })
    } else{
        fs.writeFile('./userDataComplete.txt', buff , (err) => {
            if(err) throw err
            console.log("file saved successfully");
        });

    }
    
   
    res.sendFile(path.join(__dirname, 'static', 'home.html'))

});

// server.post('/userData', (req,res)=> {

//     // const readStream = fs.createReadStream('./userDataComplete.txt', 'utf8');
//     // const createReadStream = fs.createWriteStream('./userData.txt');

//     // readStream.pipe(createReadStream);
//     // fs.readFile('userDataComplete.txt', 'utf8', (err, data) => {
//     //     if(err) throw err
//     //     // res.send(data);
//     //     console.log(data);
//     //     // res.sendFile(path.join(__dirname, 'static', 'userDataView.html'))

//     // });
//     res.sendFile(path.join(__dirname, 'static', 'userDataView.html'))
// });

server.listen(6200);