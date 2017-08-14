// global variable assignments

var correctAnswers = null;
var incorrectAnswers = null;
var timeRemaining = 10;
var questionList = [];

function subOne() {
    timeRemaining--;
    console.log(timeRemaining)
    if (timeRemaining === 0) {
        clearInterval(myVar);
    }    
}

function countdown() {
    var myVar = setInterval(subOne, 1000);

}
