// Scripts.js

//Game scores and choices Array
var playerScore = 0;
var computerScore = 0;
var choicesArr = ["Rock", "Paper", "Scissors"]
var result = "";


//adding button functions

function rockChoice(){
    let computerChoice = choicesArr[Math.floor(Math.random() * choicesArr.length)];
    let playerChoice = "Rock";
    console.log(computerChoice, playerChoice);
    round(playerChoice, computerChoice);

}
function paperChoice(){
    let computerChoice = choicesArr[Math.floor(Math.random() * choicesArr.length)];
    let playerChoice = "Paper";
    console.log(computerChoice, playerChoice);
    round(playerChoice, computerChoice);

}
function scissorsChoice(){
    let computerChoice = choicesArr[Math.floor(Math.random() * choicesArr.length)];
    let playerChoice = "Scissors";
    console.log(computerChoice, playerChoice);
    round(playerChoice, computerChoice);

}

//game logic
function round(p, c){
    if(p == "Rock" && c =="Scissors"){
        result = "Rock beats Scissors, you win!";
        playerScore++;
    }
    else if(p == "Paper" && c =="Rock"){
        result = "Paper beats Rock, you win!";
        playerScore++;
    }
    else if(p == "Scissors" && c =="Paper"){
        result = "Scissors beats Paper, you win!";
        playerScore++;
    }
    else if(p == c){
        result = "It's a tie!";
    }
    else {
        result = c + " beats " + p + ", you lose!"
        computerScore++;
    }

    //updates webpage
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    document.getElementById('playerChoice').innerHTML = p;
    document.getElementById('computerChoice').innerHTML = c;
    document.getElementById('results').innerHTML = result;

}

//button inputs
document.getElementById('rock').onclick = rockChoice;
document.getElementById('paper').onclick = paperChoice;
document.getElementById('scissors').onclick = scissorsChoice;