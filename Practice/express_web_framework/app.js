const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');

const app = express();

// middleware
app.use('/public', express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'static','index.html'));
    // res.send('Hello CB'); 
});
app.get('/sign-in', (req,res) => {
    res.sendFile(path.join(__dirname,'static','auth.html'));
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

//post routes

const schema = Joi.object().keys({
    email : Joi.string().trim().email().required(),
    password: Joi.string().min(5).max(10).required()
});

app.post('/', (req,res) => {
    // console.log(req.body);

    const validation = schema.validate(req.body);

    console.log(validation);
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
    //database work here
    // res.json({success : true });
});

app.listen(3000);