'use strict';
// displays the current question number out of total questions and total number correct
const displayQuestionNumber = function () {
    HEADER.text(`Question ${counter.currentQuestion} of ${questionsList.length} (${counter.currentCorrect} correct)`);
    if (counter.currentQuestion > questionsList.length) {
        HEADER.text(`Question ${questionsList.length} of ${questionsList.length} (${counter.currentCorrect} correct)`);
    };
};

// displays question and answers of current question
const generateQuestion = function () {
    QUESTION.text('');
    INPUT.val('');
    displayQuestionNumber();
    let current = questionsList[counter.currentQuestion - 1];

    QUESTION.text(current.question);

    INPUT.each(function (index) {
        $(this).val(current.options[index]);
    });

    LABEL.each(function (index) {
        $(this).text(current.options[index]);
    });
};

// displays and hides quiz navigation buttons
const displayNavButtons = function () {
    if (counter.currentQuestion > questionsList.length) {
        RESTART.removeClass('hidden');
        NEXT.addClass('hidden');
        RESULT.text(`Your final score is: ${counter.currentCorrect} out of ${questionsList.length}`)
        VIDEO.removeClass('hidden');
        VIDEO.prop('href', 'https://www.youtube.com/watch?v=vmNMCBW9O88');
        VIDEO.text('\"Join me in singing a Vikings Christmas Carol!\"');
    };
    if (counter.currentQuestion === 1) {
        SOUNDER.attr('src', './assets/audio/welcometominnesota.mp3');
        VIDEO.addClass('hidden');
    };
    if (counter.currentQuestion <= questionsList.length) {
        RESTART.addClass('hidden');
        NEXT.removeClass('hidden');
        NEXT.text('Next Question');
    };
};

// grabs random asset from array
const getRandomAsset = function (assetArray) {
    return assetArray[Math.floor((Math.random() * 5))];
};

// grabs link for correspoding question
const getVidLink = function () {
    if (!questionsList[counter.currentQuestion - 1].link === false) {
        VIDEO.removeClass('hidden');
        VIDEO.prop('href', questionsList[counter.currentQuestion - 1].link);
        VIDEO.append('\"Relive this Vikings memory!\"');
    };
};