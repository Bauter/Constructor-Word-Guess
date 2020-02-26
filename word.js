let Letter = require("./Letter");

function Word(word) {
    // An array of `new` Letter objects representing the letters of the underlying word
        // The current word is split by character into an array ( letterArry). Each item in the array is then turned into a letter object with .map(). Map method runs the anonymous function on each element in the array.
        
    this.letterArry = word.split("").map(function(character) {
        return new Letter(character);
    });

    // string together elements in 'letterArry' to form word, should initially be underscore until a correct guess is made.
    this.toString = function() {
        return this.letterArry.join(" ");       /* >>> !!! UGH! I cannot get string to display! WHY!!! FIX THIS !!! <<< */
    };

    // Check elements in letterArry for match to user input
    this.checkGuess = function(userInput) {
        // If the userInput is a letter then run function.
        if (userInput = /[a-zA-Z]/) {
            // For each element in the array, check the user input compared to the letter object character
            return this.letterArry.forEach(function(element) {
                return element.checkInput(userInput);
            });
        } else {
            // Inform the user that input is not a valid choice.
            console.log(userInput + " Is not a valid character");
        };
    };

};

// export Word constructor
module.exports = Word;