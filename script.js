//Computer to generate rock, paper or scissors randomly
function computerPlay () {
   let computerSelection = Math.floor(Math.random() * 3);

    switch (computerSelection) {
        case 0:
            computerSelection = "ROCK";
            break;

        case 1:
            computerSelection = "PAPER";
            break;

        case 2:
            computerSelection = "SCISSORS";
            break;
    }
    return computerSelection;
}

//Ask user for rock, paper or scissors input (case insensitive)
//Play the round and compare user input to computer selection
//Output win or lose and condition statement
function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie!";

    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "You lose! Paper beats rock.";

    } else if (playerSelection === "ROCK" && computerSelection ==="SCISSORS") {
        j++;
        return "You win! Rock beats scissors.";

    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        j++;
        return "You win! Paper beats rock.";
    
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "You lost! Scissors beats paper.";

    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "You lost! Rock beats sciossors.";
        
    } else {
        j++;
        return "You win! Scissors beats paper.";
    }
    
}

//play 5 games where player imput is compared to computer selection
//
//
function game() {
    for (var i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Enter: Rock, Paper, or Scissors");
        playerSelection = playerSelection.toUpperCase();

        if (playerSelection == "ROCK" || playerSelection == "PAPER" || playerSelection == "SCISSORS") {
            let computerSelection = computerPlay();

            console.log(playRound(playerSelection, computerSelection));
        
        } else {
            return "Please enter rock, paper, or scissors.";
        }
    }

    return "You won " + j + " times!";
}

let j = 0;
console.log(game());