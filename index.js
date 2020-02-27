// Use require method to assign Word module to variable, and inquirer package to variable.
let Word = require("./Word");
let inquirer = require("inquirer");
// Word array of words to guess.
let wordArry = ["javascript", "raspberry", "python", "linux", "github", "node", "firebase", "developer"]
// Guess count set to 10, giving user 10 guesses. Will be incremented down if guess is wrong.
let guessCount = 10;


// Function to prompt the user if they would like to play the game
function startPrompt() {
    inquirer.prompt([
        {
            type:"confirm",
            name:"start",
            message:"Would you like to start the game?"
        }
    ]).then(function(answer) {
        // Conditional statement to determine whether to call 'startGame' function, or exit.
        if (answer.start === true) {
            startGame();
        } else {
            console.log("GoodBye!");
            process.exit;
        };
    });
};
// Call 'startPrompt' to ask user if they would like to play.
startPrompt();


// Function to start game, pick a random word from wordArry and assign to variable, create a new word object with variable and assign to a new variable to use later.
function startGame() {
    //let wrongLettersArry= [];
    let randomWord = wordArry[Math.floor(Math.random() * wordArry.length)];
    wordToGuess = new Word(randomWord);
    //wordToGuess.toString(); //trying to initiate display.
    userGuess() 
    
};

// Function using inquirer to ask user to guess a letter
function guessLetter() {
    
    return inquirer.prompt([
        {
            type:"input",
            name:"guess",
            message:"Guess the letters?"
            
        }
    ]).then(function(answer) {
        // store the inquirer answer to a variable.
        let userInput = answer.guess;
        // store the word object 'checkGuess' function to a variable.
        choice = wordToGuess.checkGuess(userInput);
       
        // wordToGuess.winner();
        
        // compare userInput to choices variable
        if (choice) {
            console.log("Correct!");
        } else {
            // If userInput (user guess) is not the same as letter in the word, decrease 'guessCount' by 1, push userInput to wrongLettersArry. Log amount of guesses left.
            console.log("Sorry, try again")
            guessCount--;
            console.log("Guesses left: " + guessCount);
        };
        //return wordToGuess.toString();

        
    })
};

// function to allow recursion of "guessLetter" function
function userGuess() {
    
    console.log(wordToGuess.toString());    // !!! >>> This gets my underscores displayed, 
   
    console.log(wordToGuess.letterArry.length);
    // console.log(wordToGuess)

    if (wordToGuess.checkIfTrue()) {
        console.log("YOU WON!");
        replay(); 
    } else {
        // Call guessLetter and then run anonymous function containing conditional statement.
        guessLetter().then(function() {
            // If the guessCount is greater than zero, call userGuess function again (recursion)
            if (guessCount > 0) {
                userGuess() 
            } else {
                // If guessCount is not greater than 0, call the replay function and console.log game over.
                console.log("Sorry, out of guesses, game over");
                replay();
            };

        // for (i=0; i < wordToGuess.letterArry.length; i++) {
        //     if (guessCount > 0 && wordToGuess.letterArry[i] !== false) {
        //         console.log("YOU WON!");
        //         replay();
        //     }
        // }
    }); 
    }  
}

// function checkResult(){
//     if (wordToGuess.checkIfTrue()) {
//         console.log("YOU WON!");
//         replay(); 
//     }
// };

// Function to be called when game is over, using inquirer to ask user if they would like to play again
function replay() {
    inquirer.prompt([
        {
            type:"confirm",
            name:"replay",
            message:"Would you like to play again?"
        }
    ]).then(function(answer) {
        // Conditional statement used to either end game if answer = false, or to call 'startGame' if answer = true and start game over again.
        if (answer.replay === true) {
            startGame();
        } else {
            console.log("Goodbye!");
            process.exit;
        }
    })
}