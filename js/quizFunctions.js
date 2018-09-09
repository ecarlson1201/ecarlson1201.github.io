'use strict';
// displays the current question number out of total questions and total number correct
const displayQuestionNumber = function () {
    HEADER.text(`Question ${counter.currentQuestion()} of ${questionsList.length} (${counter.currentCorrect()} correct)`);
    if (counter.currentQuestion() > questionsList.length) {
        HEADER.text(`Question ${questionsList.length} of ${questionsList.length} (${counter.currentCorrect()} correct)`);
    };
};

// displays question and answers of current question
const generateQuestion = function () {
    QUESTION.text('')
    INPUT.val('');
    displayQuestionNumber();
    let current = questionsList[counter.currentQuestion() - 1];

    QUESTION.text(current.question);

    INPUT.each(function (index) {
        $(this).val(current.options[index]);
    });

    $('label').each(function (index) {
        $(this).text(current.options[index]);
    });
};

// displays and hides quiz navigation buttons
const displayNavButtons = function () {
    if (counter.currentQuestion() > questionsList.length) {
        RESTART.removeClass('hidden');
        NEXT.addClass('hidden');
        RESULT.text(`Your final score is: ${counter.currentCorrect()} out of ${questionsList.length}`)
    };
    if (counter.currentQuestion() <= questionsList.length) {
        RESTART.addClass('hidden');
        NEXT.removeClass('hidden');
        NEXT.text('Next Question');
    };
    if (counter.currentQuestion() === 0) {
        NEXT.text('Start Quiz');
    };
};

// grabs random asset from array
const getRandomAsset = function (assetArray) {
    return assetArray[Math.floor((Math.random() * 5))]
}

const getVidLink = function () {
    if (!questionsList[counter.currentQuestion() - 1].link === false) {
        VIDEO.prop('href', questionsList[counter.currentQuestion() - 1].link)
        VIDEO.append('Relive this Vikings memory!')
    }
}
