// removes 'js.checked' class from all inputs and adds it to the last clicked input
(function () {
    INPUT.click(function (event) {
        INPUT.removeClass('js-checked');
        $(this).addClass('js-checked');
    });
})();

// displays results of submitted answer
(function () {
    $('form').submit(function (event) {
        event.preventDefault();
        if (questionsList[counter.currentQuestion() - 1].answer === $('input:checked').val()) {
            RESULT.text('correct');
            counter.addCorrect();
        }
        else {
            RESULT.text('incorrect');
        };
        QUIZ.toggleClass('hidden');
        INPUT.removeClass('js-checked');
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
    });
})();

// resets quiz and buttons to starting position
(function () {
    RESTART.click(function (event) {
        counter.reset();
        displayNavButtons();
    });
})();