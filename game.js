console.log("hello world. Let's play rock paper scissors")

let max = 3; // allows Math.random to be scaled so getComputerChoice returns 0, 1, or 2

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

function getHumanChoice() {
    let choice = prompt("Make your choice");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie!");
        return;

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock.");
        return 0;

    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors.");
        return 1;

    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper.");
        return 0;
        
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock.");
        return 1;
        
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors.");
        return 0;

    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper.");
        return 1;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundsNum = 0;

    do {
        // get choices
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        // display choices
        console.log("Your choice: ", humanChoice);
        console.log("Computer choice: ", computerChoice);

        // get this round's result
        let roundResult = playRound(humanChoice, computerChoice);

        // set score according to the result
        if (roundResult == 1) {
            humanScore += 1;
        } else if (roundResult == 0) {
            computerScore += 1;
        }
        // display score
        console.log("Your score: ", humanScore);
        console.log("Computer score: ", computerScore);
        console.log("") // make rounds more human readable in the console
        roundsNum += 1;

    } while (roundsNum < 5);

    // find result of game
    if (humanScore == computerScore) {
        return "This game is a tie!"

    } else if (humanScore > computerScore) {
        return "You won this game!"
        
    } else {
        return "Computer won this game!"
    }
}

console.log(playGame());
