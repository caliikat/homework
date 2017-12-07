this homework was very hard for me. i received tutoring on what i found on the net... and i am not sure i would be able to do this solo just yet. 
i wish more time was spent on homework assignments to not feel like total failure with complicated javascript. maybe that is just me. 


// var prompt = require("prompt");
// prompt.start();
// var Word = require("./word.js");


// var game = {
//   wordBank: ["rachel", "joey", "chandler", "monica", "phoebe", "ugly naked guy", "triplets", "ross", "coffee shop"],
//   guessesRemaining: 10,
//   currentWrd: null,

//   startGame: function(wrd) {
//     var newWord = new Word(this.wordBank[Math.floor(Math.random()*this.wordBank.length)]);
//     this.currentWrd = newWord;
//     this.currentWrd.getLets();
//     this.keepPromptingUser();
//   },
//   keepPromptingUser: function() {

//     var self = this;
    

//     prompt.get(["guessLetter"], function(err, result) {
//       console.log("The Letter or space you guessed is " + result.guessLetter);
//       var findHowManyOfUserGuesses = self.currentWrd.checkIfLetterFound(result.guessLetter);

//       if (findHowManyOfUserGuesses === 0) {
//         console.log("You guessed wrong!");
//         self.guessesRemaining -= 1;
//       } else {
//         console.log("You guessed right!");
//         if (self.currentWrd.didWeFindTheWord() === true) {
//           console.log("You Won!!!");
//           return 1;
//         } else {
//           console.log("guesses remaining: " + self.guessesRemaining);
//           console.log(self.currentWrd.wordRender());
//         }
//       }
//       if (self.guessesRemaining > 0 && self.currentWrd.found === false) {
        self.keepPromptingUser();
      } else if (self.guessesRemaining === 0) {
        console.log("this game is done");
        console.log("The word was " + self.currentWrd.word);
      } else {
        console.log(self.currentWrd.wordRender());
      }
    });
  }
};

game.startGame();