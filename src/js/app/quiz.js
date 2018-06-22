// quiz constructor function
function Quiz() {
  this.questions = [];
  this.score = 0;
  this.questionIndex = 0;
}

// create a method that adds questions to the questions array
Quiz.prototype.add = function(question) {
  this.questions.push(question);
}


Quiz.prototype.hasEnded = function() {
  // compare the number of questions to the question index
  return this.questions.length === this.questionIndex;
  // returns true if we are on last question
};
