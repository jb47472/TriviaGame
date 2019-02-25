
var questionsAnswers = [{
    question: "What Year did the Carolina Panthers Join the NFL?",
    answers: [
        "1992", "1997", "1995", "1994"
    ],
    correctAnswer: "1995",
}, {
    question: "How Many Games did the Panthers Lose Before Getting Their First Franchise Victory?",
    answers: [
        "3", "4", "5", "6"
    ],
    correctAnswer: "5",
}, {
    question: "What Other Expansion Team Joined the NFL the Same Year as the Panthers?",
    answers: [
        "Baltimore Ravens", "Jacksonville Jaguars", "Tennessee Titans", "St. Louis Rams"
    ],
    correctAnswer: "Jacksonville Jaguars",
}, {
    question: "Against What Team Did the Panthers Recieve Their First Team Victory?",
    answers: [
        "Tampa Bay Buccaneers", "San Fransisco Giant", "Atlanta Falcons", "New York Jets"
    ],
    correctAnswer: "New York Jets",
}, {
    question: "How Many Sacks Did Julius Peppers Get in the 2002 Season?",
    answers: [
        "4", "8", "12", "14"
    ],
    correctAnswer: "12",
}, {
    question: "Panthers All Time Great LB Sam Mills Attended What University?",
    answers: [
        "Florida State University", "Montclair State University", "University of Miami", "Weber State University"
    ],
    correctAnswer: "Montclair State University",
}, {
    question: "Who Was the Inaugural Coach for the Panthers?",
    answers: [
        "Dom Capers", "George Seifert", "Tom Couchlin", "John Fox"
    ],
    correctAnswer: "Dom Capers",
}, {
    question: "Where Did the Panthers Play Their Home Games in Their Innagural Season?",
    answers: [
        "Charlotte, NC", "Fort Mill, SC", "Columbia, SC", "Clemson, SC"
    ],
    correctAnswer: "Clemson, SC",
}, {
    question: "Whom Did the Panthers Choose and Their #1 Draft Pick in Their Innagural Draft of 1995?",
    answers: [
        "Steve McNair", "Kerry COllins", "Jake DelHomme", "Steve Beuerlein"
    ],
    correctAnswer: "Kerry Collins",
}, {
    question: "How Many Seasons Did It Take for the Panthers to Have Their First Winning Season?",
    answers: [
        "1", "2", "3", "4"
    ],
    correctAnswer: "2",
}];

var triviaBoard = $("#quiz-area");


$(document).on("click", "#play", function () {
    console.log("Start Game")
    game.start();

});

$(document).on("click", "#done", function () {
    console.log("End Game");
    game.done();
});

var game = {
    correct: 0,
    incorrect: 0,
    counter: 75,
    countdown: function () {
        game.counter--;
        $("#countdown").html(game.counter)
        if (game.counter === 0) {
            console.log("Straight Cash Homey");
            game.done();
        }
    },



start: function() {

    timer = setInterval(game.countdown, 1000);
    $("#subWrapper").prepend('<h2>Time Remaining: <span id="countdown">75</span> Seconds</h2');
    $("start").remove();

    for (var i = 0; i < questionsAnswers.length; i++) {
        triviaBoard.append("<h2>" + questionsAnswers[i].question + "<h2>");
        for(var j = 0; j < questionsAnswers[i].answers.length; j++) {
            triviaBoard.append('<p><input type="checkbox" name ="question' + '-' + i + '"value="' + questionsAnswers[i].answers[j] + '">' + "   " +questionsAnswers[i].answers[j] + "</p>");
        }

    }

    triviaBoard.append('<button class="btn-primary id="done">Done</button>');

},

done: function() {
    console.log("Finished");
    $.each($("input[name='question-0]:checked"), function() {
        if ($(this).val()=== questionsAnswers[0].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });

    $.each($("input[name='question-1]:checked"), function() {
        if ($(this).val()=== questionsAnswers[1].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });

    $.each($("input[name='question-2]:checked"), function() {
        if ($(this).val()=== questionsAnswers[2].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });

    $.each($("input[name='question-3]:checked"), function() {
        if ($(this).val()=== questionsAnswers[3].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });

    $.each($("input[name='question-4]:checked"), function() {
        if ($(this).val()=== questionsAnswers[4].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });

    $.each($("input[name='question-5]:checked"), function() {
        if ($(this).val()=== questionsAnswers[5].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });

    $.each($("input[name='question-6]:checked"), function() {
        if ($(this).val()=== questionsAnswers[6].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });

    $.each($("input[name='question-7]:checked"), function() {
        if ($(this).val()=== questionsAnswers[7].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });

    $.each($("input[name='question-8]:checked"), function() {
        if ($(this).val()=== questionsAnswers[8].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });

    $.each($("input[name='question-9]:checked"), function() {
        if ($(this).val()=== questionsAnswers[9].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });

    this.result();
},

result: function() {
    clearInterval(timer);
    document.getElementById("play").style.display = "block";
    $("#subWrapper h2").remove();
    triviaBoard.html("<h2>Outta Time!</h2>");
    triviaBoard.html("<h3>Correct Answers: " + this.correct + "<h3>");
    triviaBoard.html("<h3>Incorrect Answers: " + this.incorrect + "<h3>");

}

};
