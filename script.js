function computerPlay () {
   computerSelection = Math.floor(Math.random() * 3);

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
}

function playerChoice (element) {
    playerSelection = element.innerHTML.toUpperCase();
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return;

    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return j++;

    } else if (playerSelection === "ROCK" && computerSelection ==="SCISSORS") {
        return i++;

    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return i++;
    
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return j++;

    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return j++;
        
    } else {
        return i++;
    }
} 

//display character selection inside div with id="area"
function displaySelections (container, playerSelection, computerSelection) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "selection");
    const newContent = document.createTextNode(
        "You chose " + playerSelection + " and the computer chose " + computerSelection + ". It is " + i + " to " + j + ".");
    newDiv.appendChild(newContent);
    container.appendChild(newDiv);
}

function displayWinner (i, j) {
    if (i == 5) {
        setTimeout(() => alert("You won " + i + " to " + j + "!"), 1);
    }
    
    else {
        setTimeout(() => alert("You lost " + i + " to " + j + "!"), 1);
    }
}

let i = 0;
let j = 0;
let playerSelection = "string";
let computerSelection = "string";

//create container
var container = document.createElement("div");
container.classList.add("container");

//append container to div with id="area"
const element = document.getElementById("area");
element.appendChild(container);

//add event listener to the button and 
//play rock, paper, scissors when the button is clicked
const buttonElement = document.getElementsByClassName("btn");
for (var k = 0; k < buttonElement.length; k++) {
    buttonElement[k].addEventListener("click", function (e) {
        playerChoice(e.target);
        computerPlay(e.target);
        playRound(playerSelection, computerSelection);
        displaySelections(container, playerSelection, computerSelection);
        
        if (i == 5 || j == 5) {
            displayWinner(i, j);
            
            //reset the game
            i = 0;
            j = 0;
            container.innerHTML = "";
        }
    })
}
