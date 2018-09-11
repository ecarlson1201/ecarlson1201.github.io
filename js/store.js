// counter that tracks current question and correct answer count, adds to question and correct answer count, and resets count
const Counter = function () {
    const that = this

    this.myCurrentQuestion = 0;
    this.myCurrentCorrect = 0;
    
    this.currentQuestion = function() {
        return this.myCurrentQuestion
    };
    this.currentCorrect = function () {
        return this.myCurrentCorrect
    };
    this.nextQuestion = function () {
        this.myCurrentQuestion = that.myCurrentQuestion + 1
    };
    this.addCorrect = function () {
        this.myCurrentCorrect = that.myCurrentCorrect + 1;
    };
    this.reset = function () {
        this.myCurrentQuestion = 0;
        this.myCurrentCorrect = 0;
    };
    this.indexOf = function () {
        return this.myCurrentQuestion - 1
    };
};

const counter = new Counter()