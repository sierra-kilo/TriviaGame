// variables we might needd
var timeRemaining = 20+1;
var correctAnswers;
var incorrectAnswers;
var questionList = [];
var choice;
var correct;
var gameStarted = false;
var myTimer;

// what we need to do

// load page
// only load instructions
if(!gameStarted) {
    $(function () {
        $('.questionaire').hide();
        $('.time-display').hide();
        $('.results-display').hide();
    });
}

// click start button
$('.btn[name=start]').click(function() {
    $('.instructions').hide();
    // show questions and response options
    $('.questionaire').show();
    renderQuestionaire();
    // show and start countdown
    $('.time-display').show();
    myTimer = setInterval(countdown, 100)
    countdown();
});


// countdown functions
function countdown() {
    timeRemaining--;
    $('.countdown').text(timeRemaining);
    if (timeRemaining <= 0) {
        clearInterval(myTimer);
    }
}

// dynamically create questions and choices and submit button


// Initial list of questions in other file
// Initial array of movies
var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

// Function for displaying movie data
function renderQuestionaire() {
    for(var i = 0; i < questions.length; i++) {
        var $questions = $("<div class='question'>");
        $questions.html(questions[i].question);
        $('.quesionaire-display').append($questions);
      }
}

// wait for end of timer or submit button
// remove question
// grade
// show results results
