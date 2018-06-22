var QuizUI = {
  displayNext: function() {
    if (quiz.hasEnded()) {
      this.displayGameOver();
    } else {
    this.displayQuestion();
    this.displayChoices();
    this.displayProgress();
    }
  },

  displayQuestion: function() {
    questionElement.innerHTML = quiz.questions[quiz.questionIndex].question;
  },

  displayChoices: function() {
    firstChoiceElement.innerHTML = quiz.questions[quiz.questionIndex].choices[0];
    secondChoiceElement.innerHTML = quiz.questions[quiz.questionIndex].choices[1];
  },

  displayProgress: function() {
    var numberOfQuestions = quiz.questions.length;
    var currentQuestion = quiz.questionIndex;
    progressElement.innerHTML = "Question " + (currentQuestion + 1) + " out of " + numberOfQuestions;
  },

  displayGameOver: function() {
    var gameOverString = "<h1 class=\"text-center mb-5\">Awesome Quiz</h1>";
    gameOverString += "<h2 class=\"py-3 text-center\">You scored ";
    gameOverString += quiz.score;
    gameOverString += " out of ";
    gameOverString += quiz.questions.length;
    gameOverElement.innerHTML = gameOverString;
  }
}
