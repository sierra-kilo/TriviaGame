// global variable assignments
var correctAnswers = null;
var incorrectAnswers = null;
var timeRemaining = null;
var myTimer;
var currentQuestion;

// list of questions will be used as perameters for creating new question object (question, choice, choice, choice, correct)
var questionList = [
    ['How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?', 'HE TRANSFIGURES INTO A SHARK', 'HE EATS GILLY WEED', 'HE USES A BUBBLE HEAD CHARM', 'HE EATS GILLY WEED'],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

// subtract 1 from timeRemaining and stop at 0
function subOne() {
    timeRemaining--;
    console.log(timeRemaining)
    if (timeRemaining === 0) {
        clearInterval(myTimer);
    }
}

// sets interval for countown and runs subOne function
function countdown() {
    myTimer = setInterval(subOne, 1000);
}

// question object
var question = {

    question: 'What is your name?',

    choice0: 'Jon',
    choice1: 'Jamie',
    choice2: 'Shant',

    correct: 'Shant',

    // method to call current question to display
    currentQuestion: function ([question, choice0, choice1, choice2, correct]) {
    this.question = question;
    this.choice0 = choice0;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.correct = correct;
    }
};

// next question
var i = 0;
function nextQuestion() {
    // log for testing only
    console.log(questionList[i]);
    currentQuestion = questionList[i];
    i ++;
}
// check answer
// reset timeRemaining
// submit button
var isRight = false;
$('button').click(function() {
    alert('clicked');
});
// update question display and answer display
// update time display
// update score display

// testing

// countdown();
// console.log(question.choice0);
//
// question.currentQuestion(questionList[0]);
//
// console.log(question.choice0, question.correct);
nextQuestion();
nextQuestion();
