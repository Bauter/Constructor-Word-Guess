// Use require method to import Letter module and assign to variable.
let Letter = require("./Letter");

// Word constructor
function Word(word) {
    // An array of `new` Letter objects representing the letters of the underlying word
        // The current word is split by character into an array ( letterArry). Each item in the array is then turned into a letter object with .map(). Map method runs the anonymous function on each element in the array.
        
    this.letterArry = word.split("").map(function(character) {
        return new Letter(character);
    });

    // string together elements in 'letterArry' to form word, should initially be underscore until a correct guess is made.
    this.toString = function() {
        return this.letterArry.join(" ");       /* >>> !!! UGH! I cannot get string to display! WHY!!! FIX THIS !!! <<< */ /*UPDATE: issue may be resolved with 'index.js line 75'. */
    };

    // Check elements in letterArry for match to user input // !!! >>> NEEDS FIX, correct guess not registering <<< !!! UPDATE: FIXED
    this.checkGuess = function(userInput) {
        let matchedGuess = false
        // For each element in the array, check the user input compared to the letter object character
        this.letterArry.forEach(function(element) {
            if (element.checkInput(userInput)) {
                matchedGuess = true;
            }
        });    
        return matchedGuess;
    };

    this.checkIfTrue = function() {
        
      return this.letterArry.every(function(element) {
         return element.guessedCorrect;
            
        });
    };  

};

// export Word constructor
module.exports = Word;