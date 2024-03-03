const express = require('express');
const path = require('path');

const app = express();


app.use('/public', express.static(path.join(__dirname,'static')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'static','index.html'));
    // res.send('Hello CB'); 
});

app.get('/example', (req,res) => {
    res.send('Hitting example route');
});

//route parameters
app.get('/example/:name/:age', (req,res) => {
    console.log(req.params);

    // localhost:3000/example/chris/250?q=codebolt&occupation=fullstackdeveloper
    console.log(req.query);
    res.send(req.params.name + ' : ' + req.params.age);
});

app.listen(3000);