function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    if (playerChoice != "rock" && playerChoice != "scissors" && playerChoice != "paper") {
        return "Invalid input";
    }

    if (playerChoice == computerChoice) {
        return `Tie! ${computerSelection} vs. ${computerSelection}`;
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        return "You lose! Paper beats Rock";
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        return "You win! Rock beats Scissors";
    }
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        return "You lose! Scissors beats Paper"
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        return "You win! Paper beats Rock"
    }
    else if (playerChoice == "scissors" && computerChoice == "rock") {
        return "You lose! Rock beats Scissors"
    }
    else {
        return "You win! Scissors beats Paper"
    }
}

function game() {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    let msg = playRound(playerChoice, getComputerChoice());
    console.log(msg);
    if (msg.search(/win/) != -1) {
        wins += 1;
    }
    else if (msg.search(/lose/) != - 1) {
        losses += 1;
    }
    else if (msg.search(/tie/) != - 1) {
        ties += 1;
    }
}

const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const resultDiv = document.createElement("div");
let triggered = false;

resultDiv.setAttribute("style", "display: flex; flex-flow: column nowrap; background-color: #D06EF8; border: 4px solid #B600FF; text-align: center;")

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!triggered) {
            let wordResult = document.createElement("div");
            wordResult.textContent = "RESULT";
            wordResult.setAttribute("style", "font-size: 64px; color: white;");

            resultDiv.appendChild(wordResult);
        }
        triggered = true;
    });

    button.addEventListener('click', e => {
        let rst = playRound(e.target.textContent, getComputerChoice());

        const remove = document.querySelector(".showResult");
        if (remove)
            resultDiv.removeChild(remove);

        const textResult = document.createElement("div");
        textResult.textContent = rst;
        textResult.setAttribute("style", "text-align: center; color: white; font-size: 32px;");
        textResult.classList.add("showResult");
        resultDiv.appendChild(textResult);
    });
});

container.appendChild(resultDiv);