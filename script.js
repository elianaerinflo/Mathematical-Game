//timer variables 
let timerValue = 300 // 5 MINS IN A SECOND

//quetionnaire variables
let questionElement = document.getElementById("question");
let questionNum = document.getElementById("qNum");

//level variables
let levelElement = document.getElementById("level");
let operationElement = document.getElementById("operation");

// will show the modal when the page is refreshed 

document.getElementById("modalStartContainer").classList.add("show"); 

function startGame() {

    generateNumbers();
    mathQuestion.innerHTML = num1 + ' ' + operator + ' ' + num2;

    // HIDE THE START MODAL BOX

    document.getElementById("modalStartContainer").classList.remove("show");

    // startQuiz();

    // TIMER FUNCTION

    let timer = setInterval(function(){

        // since we convert the timerValue into seconds we have to divide the number of seconds to 60 to convert second to minutes

        let minutes = Math.floor(timerValue / 60); 
        let seconds = timerValue % 60; 
    
        let minutesDisplay = minutes < 10 ? '0' + minutes : minutes; 
        let secondsDisplay = seconds < 10 ? '0' + seconds : seconds; 
    
        document.getElementById("timer").innerHTML = minutesDisplay + ' min' + ' ' + secondsDisplay + ' sec'; 
    
        if (timerValue == 0) {
    
            clearInterval(timer);
            showGameOverModal();
    
        } else {
    
            timerValue--;
        }
    
    }, 1000);

}

// questions

let mathQuestion = document.createElement("div");

// score variables
let scoreElement = document.getElementById("currentScore");

currentScoreCount = 0;
questionCount = 0;

// score display
scoreElement.innerHTML = "&nbsp;" + currentScoreCount + " / " + questionCount;

let num1 = 0;
let num2 = 0;
let operator = "+";
let operationLabel = "Additional";

function generateNumbers() {
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
}

mathQuestion.setAttribute("class", "mathQuestion");
mathQuestion.innerHTML = num1 + " " + operator + " " + num2;
questionElement.append(mathQuestion);

let inputAns = document.createElement("input");
inputAns.setAttribute("class", "inputAns");
inputAns.setAttribute("type", "number");
mathQuestion.after(inputAns);

let ans = 0;
let validation = document.createElement("validation");
let count = 1;

function submitAnswer() {

        count ++;

        if (count <= 5) {

            levelElement.innerHTML = "1.1";
            operationElement.innerHTML = "Additional";
            questionNum = questionCount;
            ans = num1 + num2;

            level1();

        } else if (count >= 6 && count <= 10) {

            levelElement.innerHTML = "1.2";
            operationElement.innerHTML = "Subtraction";
            operator = "-";
            ans = num1 - num2;

            level1();

        }else if (count >= 11 && count <= 15){

            levelElement.innerHTML = "1.3"
            operationElement.innerHTML = "Multiplication"
            operator = "x";
            answer = num1 * num2;

            level1();

        } else if (count >= 16 && count <= 20){

            levelElement.innerHTML = "1.4"
            operationElement.innerHTML = "Division";
            operator = "÷";
            answer = num1 / num2;

            level1();

        } else if (count > 21){

           gameOver();

        }
    // }


}

let correctAns = document.getElementById("correctAns");


function level1() {

    if (ans == inputAns.value) {

        currentScoreCount++;
        questionCount++;
    
        scoreElement.innerHTML = currentScoreCount + " / " + questionCount;
    
        generateNumbers();
    
        mathQuestion.innerHTML = num1 + ' ' + operator + ' ' + num2;
    
        inputAns.value = "";
    
        let correctAns = document.createElement("div");
    
        correctAns.textContent = "CORRECT ANSWER"
        correctAns.setAttribute("class", "correctAns");
        inputAns.before(correctAns);
       
        setTimeout(function(){
            correctAns.style.display= "none";
        }, 1000);
        
    } else {

        questionCount++
        scoreElement.innerHTML = " &nbsp "+ currentScoreCount + " / " + questionCount;
    
        num1 = Math.floor(Math.random() * 100);
        num2 = Math.floor(Math.random() * 100);
        mathQuestion.innerHTML = num1 + " " + operator + " " + num2;
        inputAns.value = "";
    
        let incorrectAns = document.getElementById("incorrectAns");
        incorrectAns.textContent = "INCORRECT"
        // inputAns.after(incorrect);
    
        setTimeout(function(){
            incorrect.style.display= "none";
        }, 1000);
    } 
}

// function showGameOverModal() {

//     // Show the game over modal box
//     document.getElementById("endModalContainer").classList.add("show");

// }

let finalScore = document.getElementById("finalScore");
let scorePercentage = document.getElementById("scorePercentage");

function gameOver () {

    finalScore.innerHTML = " " + currentScoreCount + "";

    let percentageCount = (currentScoreCount/40) * 100;
    scorePercentage.innerHTML = percentageCount + "%";

    document.getElementById("endModalContainer").classList.add("show");

}

// Try again function
function tryAgain() {

    // timerValue = 300; 
  
    document.location.reload();
}

