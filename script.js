





var Questions = [
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
        choices: ["a. numbers and string", "b. other arrays", "c. booleans", "d. all the above()"],
        answer: "d"
    },
    {
        question: "Questions 4 : String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c"
    },

];

var timeLeft = document.getElementById("timer");

var secondsLeft = 60;
var questionCount = 1;


function setTime() {
        
        var timerInterval = setInterval(function () {
          secondsLeft--;
          timeLeft.textContent = "Time: " + secondsLeft + "S";
    
            if (secondsLeft <= 0 || questionCount >= questionSource.length +1){
                clearInterval(timerInterval);
                finish.textContent = "Game Over!";
                gameOver();
            }
    }, 1000);
}
