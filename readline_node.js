// const EventEmitter = require('events');


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
    } else {
        rl.setPrompt("Incorrect answer,try again.  \n");
        rl.prompt();
        rl.on('line', (userAnswer) => {
            if(userAnswer.trim() == answer){
                rl.close();
            } else {
                rl.setPrompt(`Your answer ${ userAnswer } is incorrect, try again \n`);
                rl.prompt();
            }
        });
    }
});

rl.on('close', () => {
    console.log("correct!!");
});