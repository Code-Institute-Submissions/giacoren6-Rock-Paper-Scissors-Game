let choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

function computerRandom() {
    const randomChoice = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    switch (randomChoice) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }

    return computerChoice;
}

function playGame(userChoice) {
    let computerChoice = computerRandom();
    if (userChoice === computerChoice) {
        alert("It's a tie!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("You win!");
        userScore++;
    } else {
        alert("You lose!");
        computerScore++;
    }
    alert(
        "You chose " +
            userChoice +
            " and the computer chose " +
            computerChoice +
            ". The score is " +
            userScore +
            " to " +
            computerScore +
            "."
    );

    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;
}

let button = document.getElementById("rock");
button.addEventListener("click", function () {
    playGame("rock");
});
button = document.getElementById("paper");
button.addEventListener("click", function () {
    playGame("paper");
});
button = document.getElementById("scissors");
button.addEventListener("click", function () {
    playGame("scissors");
});

button = document.getElementById("reset");
button.addEventListener("click", function () {
    userScore = 0;
    computerScore = 0;
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;
});
