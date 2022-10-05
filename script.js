

var questionelement = document.getElementById('questions'); // handle 
var optionsdiv = document.getElementsByClassName('options') [0];
var options1element = document.getElementById('option1');
var options2element = document.getElementById('option2');
var options3element = document.getElementById('option3');
var options4element = document.getElementById('option4');
var optionsarray =[ options1element, options2element, options3element, options4element]; 
var result = document.getElementById('result');
var timeLeft = document.getElementById("timer");
var questionNumber =0;
var score = 0; 
var quizElement = document.getElementById('quiz'); 
var nameDiv = document.getElementById('name-div');
var scoreElement = document.getElementById('score');
var button = document.getElementById('name-submit');
var nameElement = document.getElementById('name');
var scoresElement= document.getElementById('highscores');
var highscores = JSON.parse(localStorage.getItem('scores'));

var questions = [
    {
        question: "Questions 1 : Commonly used data types DO NOT include:",
        options: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c"
    },

{
        question: "Questions 2 : The condition in an if/else statement is enclosed with _____ :",
        options: ["a. quotes", "b. curly brackets", "c. parenthesis", "d. sqaure brackets"],
        answer: "c"
    },

    {
        question: "Questions 3 : Arrays in JavaScript can be used to store ____",
        options: ["a. numbers and string", "b. other arrays", "c. booleans", "d. all the above()"],
        answer: "d"
    },
    {
        question: "Questions 4 : String values must be enclosed within _____ when being assigned to variables.",
        options: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c"
    },

];


function loadQuestion (questionNumber) {
    questionelement.textContent = questions[questionNumber].question;

    for ( var i =0; i <4; i++) {
        optionsarray[i].textContent =questions[questionNumber].options[i];
    } 
    
}

function loadScoreBoard (){
    questionelement.remove();
    optionsdiv.remove();
    timeLeft.remove();
    result.remove();

    scoreElement.textContent = score;
    nameDiv.style.display= "block";
    loadHighscores(); 
};

function loadHighscores (){

    var highscores= JSON.parse(localStorage.getItem('scores'))
    var scoresList = document.createElement("ul");

    for (var highscore of highscores) {
        var lineElement = document.createElement('li');
        lineElement.textContent = `Name: ${highscore.name}, Score: ${highscore.score}`;
        scoresList.appendChild(lineElement);
    }

    scoresElement.appendChild(scoresList);
}


optionsdiv.addEventListener( 'click', function(event) {
   var correctAnswer = questions[questionNumber].answer 
   var answerChoice = event.target.textContent[0];
    if ( correctAnswer === answerChoice){
        result.textContent = 'correct';
        score+=25; 

    } else {
        result.textContent = 'wrong';
    }

    questionNumber++ 

    if (questionNumber < questions.length ) {
        loadQuestion(questionNumber); 

    } else {
        loadScoreBoard ();
    }
});


button.addEventListener ('click', function(){
    highscores.push({ 
        name: nameElement.value,
        score: score
    })

    localStorage.setItem('scores', JSON.stringify(highscores));
    scoresElement.children[0].remove();  loadHighscores();
});








var secondsLeft = 60;
var questionCount = 1;

function setTime() {
        
        var timerInterval = setInterval(function () {
          secondsLeft--;
          timeLeft.textContent = "Time: " + secondsLeft + "S";
    
            if (secondsLeft <= 0 || questionCount >= questions.length +1){
                clearInterval(timerInterval);
                timeLeft.textContent = "Game Over!";
            
            }
    }, 1000);
}
setTime();
loadQuestion(0);



