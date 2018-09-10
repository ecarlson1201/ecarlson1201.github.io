// counter that tracks current question and correct answer count, adds to question and correct answer count, and resets count
const counter = (function () {
    let counterModule = {};
    let currentQuestion = 0;
    let currentCorrect = 0

    counterModule.nextQuestion = function () {
        return currentQuestion++
    };

    counterModule.addCorrect = function () {
        return currentCorrect++
    };

    counterModule.currentQuestion = function () {
        return currentQuestion
    };

    counterModule.currentCorrect = function () {
        return currentCorrect
    };

    counterModule.reset = function () {
        currentQuestion = 0;
        currentCorrect = 0;
    };

    return counterModule
})();