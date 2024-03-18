
//user score and computer score and result
let userScore = 0;
let computerScore = 0;
let result = document.getElementById('result');

//computer random choice
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
//function to play the game with result and score
function playGame(userChoice) {
    let computerChoice = computerRandom();
    if (userChoice === computerChoice) {
        result.innerText = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result.innerText = "You win!";
        userScore++;
    } else {
        result.innerText = "You lose!";
        computerScore++;
    }

    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('result').innerText = "You chose " + userChoice + " and the computer chose " + computerChoice + ". The score is " + userScore + " to " + computerScore + "." + " " + result.innerText;
{
    if (userScore === 5) {
        result.innerText = "Congratulations! You won the game!";
        userScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        result.innerText = "Sorry, you lost the game.";
        userScore = 0;
        computerScore = 0;
    } else {
        result.innerText = "The score is " + userScore + " to " + computerScore + "." + " " + result.innerText;
    }

    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('result').innerText = result.innerText; 
}
}

//event listener for the reset button with result 
button = document.getElementById("reset");
button.addEventListener("click", function () {
    userScore = 0;
    computerScore = 0;
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('result').innerText = "The score has been reset.";
});
//event listeners for the images 
let images = document.getElementById('r');
images.addEventListener('click', function () {
    playGame('rock');
})
images = document.getElementById('p');
images.addEventListener('click', function () {
    playGame('paper');
});
images = document.getElementById('s');
images.addEventListener('click', function () {
    playGame('scissors');
});



