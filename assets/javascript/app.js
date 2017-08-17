// global variable assignments
var correctAnswers = null;
var incorrectAnswers = null;
var timeRemaining = 10;
var questionList = [];
var myTimer;
var currentQuestion;

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

var question = {

    question: 'What is your name?',

    choice0: 'Jon',
    choice1: 'Jamie',
    choice2: 'Shant',

    correct: 'Shant',

    currentQuestion: function ([question, choice0, choice1, choice2, correct]) {
    this.question = question;
    this.choice0 = choice0;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.correct = correct;
    }
};

// countdown();
console.log(question.choice0);

question.currentQuestion(['What is your dogs name? ', 'zoe', 'snickers', 'both', 'both']);

console.log(question.choice0, question.correct);
