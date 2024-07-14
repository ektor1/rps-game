let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        roundResultMessage.textContent = "It's a tie!";
        return;
    } else if (
        humanChoice == "rock" && computerChoice == "scissors" || 
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper") {
        
        roundResultMessage.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore += 1;
    } else {
        roundResultMessage.textContent = "You lost! " + computerChoice + " beats " + humanChoice;
        computerScore += 1;
    }
}

const choices = document.querySelectorAll("button");

let roundResultMessage = document.querySelector("#roundResultMessage");
let humanScoreMessage = document.querySelector("#humanScoreMessage");
let computerScoreMessage = document.querySelector("#computerScoreMessage");
let resultMessage = document.querySelector("#resultMessage");

choices.forEach((button) => {
    button.addEventListener("click", () => {

        resultMessage.textContent = ""; // clean result from previous game
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        humanScoreMessage.textContent = "Your score: " + humanScore;
        computerScoreMessage.textContent = "Computer score: " + computerScore;

        if (humanScore == 5 || computerScore == 5) {
            if (humanScore == computerScore) {
                resultMessage.textContent += "This game is a tie!";
        
            } else if (humanScore > computerScore) {
                resultMessage.textContent += "Congrats, you won this game! :D";
                
            } else {
                resultMessage.textContent += "Computer won this game! :(";
            }
            humanScore = 0;
            computerScore = 0;
        }  
    });
});
