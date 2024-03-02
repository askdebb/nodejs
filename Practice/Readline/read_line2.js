const readline2 = require('readline');

const rl2 = readline2.createInterface({
    input: process.stdin,
    output: process.stdout
});

let randomNumber = Math.floor((Math.random() * 10) + 1);

rl2.question("Guess the number? \n", (userInput) => {
    if(userInput.trim() == randomNumber){
        rl2.close();
    } else{
        rl2.setPrompt("Wrong guess try again\n");
        rl2.prompt();

        rl2.on('line', (userInput) => {
            if(userInput.trim() == randomNumber){
                rl2.close();
            } else {
                rl2.setPrompt(`Your guessed number ${ userInput } is not correct try again \n`);
                rl2.prompt();
            }
        });
    }
});

rl2.on('close', () => {
    console.log("correct");
});
