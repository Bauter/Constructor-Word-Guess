// 'Letter' constructor to create multiple "letter" objects.
function Letter(character) {
    // A string value to store the underlying character for the letter.
        // 'character' represents the value of each character in the word
    this.character = character;

    // A boolean value that stores whether that letter has been guessed yet.
        // A variable (with boolean value) that is used to determine a conditional statement.
        
    this.guessedCorrect = false;
    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed.
        // ^^ 'this.guessedCorrect' is used to determine which condition to run.
    this.toString = function() {
        if (this.guessedCorrect === true) {
            return this.character
        } else {
            return "_";
        };
    };
    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly.
        // User input ("user" character), is placed into a conditional statement to 
    this.checkInput = function(userInput) {
        if (userInput === this.character) {
            this.guessedCorrect = true;
        } else {
            //this.guessedCorrect = false;
            return false;
        };
    };
   

};

// export Letter constructor
module.exports = Letter;