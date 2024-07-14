// allows Math.random to be scaled so getComputerChoice returns 0, 1, or 2
let max = 3; 

function getComputerChoice() {
    let choice = Math.floor(Math.random() * max);

    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        roundResultMessage.textContent = "It's a tie!";
        // result.appendChild(roundResultMessage);
        return;

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        roundResultMessage.textContent = "You lose! Paper beats Rock.";
        // result.appendChild(roundResultMessage);
        return 0;

    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        roundResultMessage.textContent = "You win! Rock beats Scissors.";
        // result.appendChild(roundResultMessage);
        return 1;

    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        roundResultMessage.textContent = "You lose! Scissors beats Paper.";
        // result.appendChild(roundResultMessage);
        return 0;
        
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        roundResultMessage.textContent = "You win! Paper beats Rock.";
        // result.appendChild(roundResultMessage);
        return 1;
        
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        roundResultMessage.textContent = "You lose! Rock beats Scissors.";
        // result.appendChild(roundResultMessage);
        return 0;

    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        roundResultMessage.textContent = "You win! Scissors beats Paper.";
        // result.appendChild(roundResultMessage);
        return 1;
    }
}

const choices = document.querySelectorAll("button");
const result = document.querySelector("div");

let roundResultMessage = document.querySelector("#roundResultMessage");
let humanScoreMessage = document.querySelector("#humanScoreMessage");
let computerScoreMessage = document.querySelector("#computerScoreMessage");
let resultMessage = document.querySelector("#resultMessage");

let humanScore = 0;
let computerScore = 0;
let roundsNum = 0;

choices.forEach((button) => {
    button.addEventListener("click", () => {

        resultMessage.textContent = "";
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        let roundResult = playRound(humanChoice, computerChoice);

        if (roundResult == 1) {
            humanScore += 1;
        } else if (roundResult == 0) {
            computerScore += 1;
        }

        humanScoreMessage.textContent = "Your score: " + humanScore;
        computerScoreMessage.textContent = "Computer score: " + computerScore;

        if (humanScore == 5 || computerScore == 5) {
            if (humanScore == computerScore) {
                resultMessage.textContent = "This game is a tie!";
        
            } else if (humanScore > computerScore) {
                resultMessage.textContent =  "Congrats, you won this game! :D";
                
            } else {
                resultMessage.textContent =  "Computer won this game! :(";
            }
            humanScore = 0;
            computerScore = 0;
        }  
    });
});
