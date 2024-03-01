// const tutorial = require('./tutorial');
// console.log(tutorial);
// console.log(tutorial.sum(3,5));

const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', (num1, num2) => {
//     console.log(num1+num2);
// });

// eventEmitter.emit('tutorial',1,2);

// class Person extends EventEmitter{
//     constructor(firstName, lastName){
//         super();
//         this._firstname = firstName;
//         this._lastname = lastName;
//     }

//     get fullname(){
//         return "My full name is "+this._lastname + " " + this._firstname;
//     }
// }

// let bolt = new Person('hunphery', 'ayi-bonte');
// bolt.on('anything', () => {
//     console.log(bolt.fullname);
// });

// bolt.emit('anything');

const readline = require('readline');
const rl =    readline.createInterface({
                    input : process.stdin,
                    output : process.stdout
                });

let numA = Math.floor((Math.random() * 10 )) + 1;
let numB = Math.floor((Math.random() * 10 )) + 1;
let answer = numA + numB;

rl.question(`What is ${numA} + ${numB}? \n`, 
(userAnswer) =>{
    // console.log(userAnswer);
    if(userAnswer.trim() == answer){
        rl.close();
    }
});

rl.on('close', () => {
    console.log("correct!!");
});

// class Classroom extends EventEmitter{
//     constructor(className, classSize){
//         super();
//         this._classname = className;
//         this._classsize = classSize;
//     }

//     get classDetails(){
//         return this._classname + " " + this._classsize;
//     }
//     get learnersInClass(){
//         return "Learner in class and its daytime";
//     }
// }

// let schClass = new Classroom('Basic 9A,', '34');
// schClass.on("classInfo", () => {
//     console.log("Class Details: "+ schClass.classDetails + " as class name and size");
// });

// schClass.emit('classInfo');

// schClass.on('learnersInClass', () => {
//     console.log(schClass.learnersInClass);
// });

// schClass.emit('learnersInClass');

