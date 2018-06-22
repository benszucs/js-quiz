// first create a quiz
var quiz = new Quiz();

// create two new questions using the Question constructor function
var question1 = new Question("An earthquake on the moon is called a moonquake", ["True", "False"], "True");
var question2 = new Question("Is an avocado a fruit or vegetable?", ["Fruit", "Vegetable"], "Fruit");
var question3 = new Question("The Sphinx is older than Stonehenge", ["True", "False"], "True");
// add the newly created questions to the quiz's questions array
quiz.add(question1);
quiz.add(question2);
quiz.add(question3);

// target the HTML elements we want to manipulate
var questionElement = document.getElementById('question');
var firstChoiceElement = document.getElementById('choice0');
var secondChoiceElement = document.getElementById('choice1');
var progressElement = document.getElementById('progress');
var gameOverElement = document.getElementById('quiz');

//Display Quiz
QuizUI.displayNext();

// initiate the buttons to get a user answer
// when user clicks the button we need to check if its the correct answer
var selectAnswer1 = document.getElementById("guess0");
selectAnswer1.onclick = function() {
  var guess = quiz.questions[quiz.questionIndex].choices[0];
  if (guess === quiz.questions[quiz.questionIndex].answer) {
    quiz.score++;
  }
  quiz.questionIndex++;
  QuizUI.displayNext();
}

var selectAnswer2 = document.getElementById("guess1");
selectAnswer2.onclick = function() {
  var guess = quiz.questions[quiz.questionIndex].choices[1];
  if (guess === quiz.questions[quiz.questionIndex].answer) {
    quiz.score++;
  }
  quiz.questionIndex++;
  QuizUI.displayNext();
}
