// counter that tracks current question and correct answer count, adds to question and correct answer count, and resets count
const counter = (function () {
    this.currentQuestion = 0;
    this.currentCorrect = 0

    this.nextQuestion = function () {
        return currentQuestion++
    };

    this.addCorrect = function () {
        return currentCorrect++
    };
    this.reset = function () {
        this.currentQuestion = 0;
        this.currentCorrect = 0;
    }
    return this
})();