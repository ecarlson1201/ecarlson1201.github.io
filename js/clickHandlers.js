// removes 'js.checked' class from all inputs and adds it to the last clicked input
(function () {
    INPUT.click(function (event) {
        INPUT.removeClass('checked');
        $(this).addClass('checked');
    });
})();

// displays results of submitted answer
(function () {
    $('form').submit(function (event) {
        event.preventDefault();
        if (questionsList[counter.currentQuestion() - 1].answer === $('input:checked').val()) {
            RESULT.text('Correct!');
            counter.addCorrect();
            IMAGE.attr('src', getRandomAsset(correctImg))
            SOUNDER.attr('src', getRandomAsset(correctSounder))
            getVidLink()

        }
        else {
            RESULT.text(`Incorrect. The answer is ${questionsList[counter.currentQuestion() - 1].answer}`);
            IMAGE.attr('src', getRandomAsset(incorrectImg))
            SOUNDER.attr('src', getRandomAsset(incorrectSounder))
        };
        QUIZ.toggleClass('hidden');
        INPUT.removeClass('checked');
        INPUT.removeAttr('checked')
    });
})();

// advances quiz to next question
(function () {
    NEXT.click(function (event) {
        counter.nextQuestion();
        displayNavButtons();
        generateQuestion();
        QUIZ.toggleClass('hidden');
        VIDEO.text('')
    });
})();

// resets quiz and buttons to starting position
(function () {
    RESTART.click(function (event) {
        counter.reset();
        counter.nextQuestion();
        displayNavButtons();
        generateQuestion();
        QUIZ.toggleClass('hidden');
        VIDEO.text('')
    });
})();

// mutes/unmutes all sounders
(function () {
    $('#mute').click(function () {
        let bool = SOUNDER.prop("muted");
        SOUNDER.prop("muted", !bool);
    });
})();