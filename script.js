const choices = ["rock", "paper", "scissors"];

// GETTING USER INPUT
const userInput = prompt("Do you choose rock, paper or scissors?");
if (userInput === "paper" || userInput === "rock" || userInput === "scissors") {
  console.log("You chose " + `${userInput}`);
} else {
  console.log("Error! Try again!");
}

// GETTING COMPUTER INPUT
let computerInput = choices[Math.floor(Math.random()*3)];
console.log("Computer chose" + ` ${computerInput}`);

    if (computerInput <= 0.33) {
        computerInput = "rock";
    }
    if (computerInput >= 0.67) {
        computerInput = "paper";
    }
    if (computerInput >= 0.66) {
        computerInput = "scissors";
    }

// DECLARE WINNER 

// User Chooses Rock

const winner = declareWinner(userInput, computerInput);
function declareWinner(userInput, computerInput) {
    if(userInput === "rock" && computerInput === 'paper') {
        console.log ('You Lose! paper beats rock!');     
    } else if (userInput === 'rock' && computerInput === 'rock') {
        console.log ('Its a tie!');     
    } else if (userInput === 'rock' && computerInput === 'scissors') {
        console.log ('You Win! Rock beats scissors!');     
// User Chooses Paper
    } else if(userInput === "paper" && computerInput === 'rock') {
        console.log ('You win! paper beats rock!');     
    } else if (userInput === 'paper' && computerInput === 'paper') {
        console.log ('Its a tie!');     
    } else if (userInput === 'paper' && computerInput === 'scissors') { 
        console.log ('You lose! Scissors beats paper!');  
// User Chooses Scissors
    } else if(userInput === "scissors" && computerInput === 'rock') {
        console.log ('You lose! Rock beats scissors!');     
    } else if (userInput === 'scissors' && computerInput === 'paper') {
        console.log ('You win! Scissors beats paper!');     
    } else  if (userInput === 'scissors' && computerInput === 'scissors'){ 
        console.log ('It is a tie!');  
    } 
}

declareWinner();