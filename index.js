let Word = require("./Word");
let inquirer = require("inquirer");

let wordArry = ["javascript", "raspberry", "python", "linux", "github", "node", "firebase", "developer"]


function startPrompt() {
    inquirer.prompt([
        {
            type:"confirm",
            name:"start",
            message:"Would you like to start the game?"
        }
    ]).then(function(answer) {
        if (answer.start === true) {
            startGame();
        } else {
            console.log("GoodBye!");
            process.exit;
        };
    });
};

startPrompt();

function startGame() {
    
    let randomWord = wordArry[Math.floor(Math.random() * wordArry.length)];

    wordToGuess = new Word(randomWord);

    inquirer.prompt([
        {
            type:"input",
            name:"guess",
            message:"Guess the letters?"
            
        }
    ]).then(function(answer) {
        let guessCount = 10;
        let userInput = answer.guess;
        let choices = wordToGuess.checkGuess(userInput);
        
        // compare userInput to choices variable
        if (userInput === choices ) {
            console.log("Correct!");
        } else {
            console.log("Sorry, try again")
            guessCount--;
            console.log("Guesses left: " + guessCount)
        };
    })
};

