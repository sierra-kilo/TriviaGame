// global variable assignments
var correctAnswers = null;
var incorrectAnswers = null;
var timeRemaining = 10;
var questionList = [];
var myTimer;

function subOne() {
    timeRemaining--;
    console.log(timeRemaining)
    if (timeRemaining === 0) {
        clearInterval(myTimer);
    }
}

function countdown() {
    myTimer = setInterval(subOne, 1000);
}

var question0 = {
    question: 'What is your name?',

    choice0: 'Jon',
    choice1: 'Jamie',
    choice2: 'Shant',

    correct: 'Shant',

    logFunction: function () {
        console.log(question0.question, question0.choice0, this.correct, this);
        }
    };

countdown();
console.log(question0.correct);
// question0.logFunction();
