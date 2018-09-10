const questionsList = [
    {
        question: "1. Which Vikings wide receiver caught the \"Minneapolis Miracle\" touchdown "
            + 'pass against the New Orleans Saints in the 2018 playoffs?',
        options: ['A: Adam Theilen', 'B: Chris Carter', 'C: Stefon Diggs', 'D: Troy Williamson',],
        answer: "C: Stefon Diggs",
        link: "https://www.youtube.com/watch?v=d4a9KApRUks&t=33s"
    },

    {
        question: '2. Before the "Minneapolis Miracle" in 2018, the Vikings beat what team in a similar '
            + 'walkoff fashion in 2009?',
        options: ['A: San Francisco 49ers', 'B: Detroit Lions', 'C: Green Bay Packers', 'D: Chicago Bears',],
        answer: 'A: San Francisco 49ers',
        link: 'https://www.youtube.com/watch?v=pgxSzxIxPrY'
    },

    {
        question: '3. The Vikings have been to four Super Bowls. What is the Vikings\' all-time Super Bowl record?',
        options: ['A: 1 - 3', 'B: 2 - 2', 'C: 0 - 4', 'D: 4 - 0',],
        answer: 'C: 0 - 4',
        link: false
    },

    {
        question: '4. What team knocked the Vikings out of the playoffs in the last game of the 2003 season?',
        options: ['A: New York Giants', 'B: Pittsburg Steelers', 'C: Green Bay Packers', 'D: Arizona Cardinals',],
        answer: 'D: Arizona Cardinals',
        link: 'https://www.youtube.com/watch?v=nNwv4GUD8aA'
    },

    {
        question: '5. How long was the field goal that kicker Blair Walsh missed that cost the '
            + 'Vikings a playoff win in the 2016 playoffs?',
        options: ['A: 27 yards', 'B: 39 yards', 'C: 43 yards', 'D: 56 yards',],
        answer: 'A: 27 yards',
        link: 'https://www.youtube.com/watch?v=vODGkekLt5w'
    },

    {
        question: '6. In 1998, the Vikings went 15 - 1 and were favorites to go to the Super Bowl'
            + ' before being derailed by what in the NFC Championship Game?',
        options: ['A: An interception', 'B: A missed field goal', 'C: A fumble', 'D: A safety',],
        answer: 'B: A missed field goal',
        link: 'https://www.youtube.com/watch?v=b0c17edmKEU'
    },

    {
        question: '7. Which phrase am I famous for shouting during explosive runs by running back Adrian Peterson?',
        options: ['A: \"Put it on the boaarrdd...YES!!\"', 'B: \"AND HE\'S LOOSE!!\"', 'C: \"He could...go...all..the..way!!\"', 'D: \"Do you believe in miracles?!\"'],
        answer: 'B: \"AND HE\'S LOOSE!!\"',
        link: 'https://www.youtube.com/watch?v=Rp8ZhbLNDdM'
    },

    {
        question: '8. Which Hall of Fame quarterback threw a late game interception for the Vikings in the 2009 NCF '
            + 'Championship Game that prevented them from going to the Super Bowl?',
        options: ['A: JaMarcus Russell', 'B: Aaron Rodgers', 'C: Brett Favre', 'D: Fran Tarkenton',],
        answer: 'C: Brett Favre',
        link: 'https://www.youtube.com/watch?v=0UUeqvquXZI'
    },

    {
        question: '9. The Vikings were edged 41 - 0 by the New York Giants in the 2001 NFC Championship Game. Since then '
            + 'the game has been referred to as what by Vikings fans ?',
        options: ['A: \"41-Doughnut\"', 'B: \"The Hail Mary Game\"', 'C: \"Wide Left\"', 'D: \"The Minneapolis Miracle\"',],
        answer: 'A: \"41-Doughnut\"',
        link: false
    },

    {
        question: '10. In 1975, the Vikings went 12 - 2 and were favorites to reach the Super Bowl. They lost to the Cowboys '
            + 'in the divisional round due to what famous play ?',
        options: ['A: An onside kick', 'B: A pick - 6', 'C: A hail mary', 'D: A safety',],
        answer: 'C: A hail mary',
        link: 'https://www.youtube.com/watch?v=O7uS0ezb2o4'
    }
]

const correctImg = ['./assets/images/correct/correct1.jpg', './assets/images/correct/correct2.jpg', './assets/images/correct/correct3.jpg',
    './assets/images/correct/correct4.jpg', './assets/images/correct/correct5.jpg']

const incorrectImg = ['./assets/images/incorrect/incorrect1.jpg', './assets/images/incorrect/incorrect2.jpg', './assets/images/incorrect/incorrect3.jpg',
    './assets/images/incorrect/incorrect4.jpg', './assets/images/incorrect/incorrect5.png']

const correctSounder = ['./assets/audio/correct/correct1.mp3', './assets/audio/correct/correct2.mp3', './assets/audio/correct/correct3.mp3',
'./assets/audio/correct/correct4.mp3', './assets/audio/correct/correct5.mp3']

const incorrectSounder = ['./assets/audio/incorrect/incorrect1.mp3', './assets/audio/incorrect/incorrect2.mp3', './assets/audio/incorrect/incorrect3.mp3',
'./assets/audio/incorrect/incorrect4.mp3', './assets/audio/incorrect/incorrect5.mp3']