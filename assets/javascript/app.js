// global variable assignments

var correctAnswers = null;
var incorrectAnswers = null;
var timeRemaining = 10;
var questionList = [];

function countdown() {
    timeRemaining--;
    console.log(timeRemaining)
}

setInterval(countdown, 1000);
