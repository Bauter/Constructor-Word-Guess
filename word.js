let Letter = require("./Letter");

function Word(word) {
    // An array of `new` Letter objects representing the letters of the underlying word
        // The current word is split by character into an array ( letterArry). Each item in the array is then turned into a letter object with .map() 
        
    this.letterArry = word.split("").map(function(character) {
        return new Letter(character);
    });

    // check if each element is visible of hidden
    this.checkDisplay = function(){
        return letterArry.forEach(function(element) {
            return element.display();
        });
    };

    // string together elements in 'letterArry'.
    this.string = function() {
        return letterArry.join(" ");
    };

    // Check elements in letterArry for match to user input
    this.checkGuess = function(userInput) {
        return letterArray.forEach(function(element) {
            return element.checkInput(userInput);
        });
    };



};