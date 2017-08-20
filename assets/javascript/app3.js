// variables we might needd
var timeRemaining = 20+1;
var correctAnswers;
var incorrectAnswers;
var questionList = [];
var choice;
var correct;
var gameStarted = false;
var myTimer;
var gameOver;

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

// click start button to start game
$('.btn[name=start]').click(function() {
    $('.instructions').empty();
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
        gameOver = true;
    }
    if (gameOver) {
        endGame();
    }
}

// dynamically create questions and choices and submit button


// Initial list of questions in other file questionList.js

// Function for displaying movie data

function renderQuestionaire() {
    var i;
    // loop to make questions
    for(i = 0; i < questions.length; i++) {
        var $questions = $("<div class='question" + i + "'>");
        $questions.html(questions[i].question);
        $('.quesionaire-display').append($questions);
        // var $form = $('<form class="responses'+i+'">');
        // $('.question'+i).append($form);

        // loop to make choices
        for (var j = 0; j < questions[i].choices.length; j++) {


            var $responses = $('<br><input type="radio" name="choice'+i+'"/><label>');
            $responses.val(j)
            $responses.html(questions[i].choices[j]);
            $('.responses'+i).append($responses);
        }
      }
}

// wait for end of timer or submit button
// end game
    function endGame() {
        $('.btn[name=submit]').click(function() {
            // hide questions and responses
            $('.questionaire').hide();

            // check correct answers
            // $("#_1234").prop("checked", true);
            $('input[name=choices0]:checked', '.responses0').val()

            // show results
            ////////////////// need to make function ////////////////
            renderResults();



        });
    }
