// Cache the DOM
// Performance factor in play
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToReadable(word) {
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    if (word === "scissors") return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${convertToReadable(userChoice)}${smallUserWord} beats ${convertToReadable(computerChoice)}${smallCompWord} . You win! 🔥`;
    userChoice_div.classList.add("green-glow");
    setTimeout(function(){ userChoice_div.classList.remove('green-glow') }, 1000);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${convertToReadable(userChoice)}${smallUserWord} loses to ${convertToReadable(computerChoice)}${smallCompWord} . You lost... 💩`;
    userChoice_div.classList.add("red-glow");
    setTimeout(function(){ userChoice_div.classList.remove('red-glow') }, 1000);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${convertToReadable(userChoice)}${smallUserWord} equals ${convertToReadable(computerChoice)}${smallCompWord} . It's a draw!`;
    userChoice_div.classList.add("grey-glow");
    setTimeout(function(){ userChoice_div.classList.remove('grey-glow') }, 1000);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("User loses.");
            lose(userChoice, computerChoice);
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', function () {
        game("rock");
    });

    paper_div.addEventListener('click', function () {
        game("paper");
    });

    scissors_div.addEventListener('click', function () {
        game("scissors");
    });
}

main();