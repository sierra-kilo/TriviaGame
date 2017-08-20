// global variable assignments

var $timeDisplay = $('div.time-display');
var $countdown = $('div.time-display span.countdown');
var questionStartedAt = Date.now();
var TOTAL_QUESTION_TIME = 10.99 * 1000;
var questions = [
    {
        question: 'What is your name?',
        choices: [
            'Alice',
            'Bob',
            'Carl',
            'David',
        ],
        correct: 1,
    },
    {
        question: 'What is your favorite food?',
        choices: [
            'Meat',
            'Cheese',
            'Chocolate',
            'Butts',
        ],
        correct: 3,
    }
]

var mainLoopInterval;
function mainLoop() {
    var elapsed = Date.now() - questionStartedAt;
    var remaining = TOTAL_QUESTION_TIME - elapsed;
    var seconds = Math.floor(remaining / 1000.0);
    if (seconds <= 0) {
        seconds = 0;
    }
    if (seconds == 0) {
        clearInterval(mainLoopInterval);
        $timeDisplay.text('Times up!');
    } else {
        $countdown.text((seconds == 1 ? '1 second' : seconds + ' seconds') + ' remaining');
    }
}

mainLoopInterval = setInterval(mainLoop, 1000);
