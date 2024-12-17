"use strict";
// ANCHOR //= get elements from HTML and create variables
let rounds = 0;
let currentRound = 0;
// save current winnings
let computerWon = 0;
let userWon = 0;
let userChoose = "";
const stone = document.querySelector("#stone");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
// elements in the html that need to be filled
const whoChoosedWhat = document.querySelector("#whoChoosedWhat");
const userWinOutput = document.querySelector("#userWins");
const computerWinOutput = document.querySelector("#computerWins");
const winnerCurrentRoundOutput = document.querySelector("#winnerCurrentRound");
const restartBtn = document.querySelector("#restart");
const stonePaperScissors = ["Stein", "Papier", "Schere"];
const buttons = document.querySelectorAll("#chooseYourMove .btn button");
// ANCHOR //= functions
// + choosed Round
function addRounds() {
    //  checken ob rundenanzahl gewählt wurde. wenn nicht sind die buttons futsch
    if (document.getElementById("5Rounds").checked) {
        rounds = 5;
        buttons.forEach(button => {
            button.style.display = "block";
        });
    }
    else if (document.getElementById("10Rounds").checked) {
        rounds = 10;
        buttons.forEach(button => {
            button.style.display = "block";
        });
    }
    else if (document.getElementById("15Rounds").checked) {
        rounds = 15;
        buttons.forEach(button => {
            button.style.display = "block";
        });
    }
    else if (document.getElementById("20Rounds").checked) {
        rounds = 20;
        buttons.forEach(button => {
            button.style.display = "block";
        });
    }
    else {
        buttons.forEach(button => {
            button.style.display = "none";
        });
    }
}
// + game
const game = (event) => {
    event.preventDefault();
    const choosedBtn = event.currentTarget.value;
    const choosedBtnToNumber = Number(choosedBtn);
    // //random number computer
    let compChoose = Math.floor(Math.random() * 3); // 0 = stone, 1 = paper, 2 = scissors
    // user and comp choosed the same
    if (choosedBtnToNumber === compChoose) {
        writeToHtml(stonePaperScissors[choosedBtnToNumber], stonePaperScissors[compChoose], "Unentschieden", userWon, computerWon, currentRound);
        currentRound++;
        // user win
    }
    else if ((choosedBtnToNumber === 0 && compChoose === 2) ||
        (choosedBtnToNumber === 1 && compChoose === 0) ||
        (choosedBtnToNumber === 2 && compChoose === 1)) {
        writeToHtml(stonePaperScissors[choosedBtnToNumber], stonePaperScissors[compChoose], "User gewinnt", userWon, computerWon, currentRound);
        userWon++;
        currentRound++;
        // computer win
    }
    else {
        writeToHtml(stonePaperScissors[choosedBtnToNumber], stonePaperScissors[compChoose], "Computer gewinnt", userWon, computerWon, currentRound);
        computerWon++;
        currentRound++;
    }
    // hide buttons (stone, paper, scissors)
    hideButtons();
};
stone.addEventListener("click", game);
paper.addEventListener("click", game);
scissors.addEventListener("click", game);
// + function for who is the winner
//FIXME !!!!!!!!!!!!!!! läuft noch nicht !!!!!!!!!!!!!!
const theWinnerIs = () => {
    // if (userWon > computerWon) {
    //     console.log("User gewinnt");
    // } else if (computerWon > userWon) {
    //     console.log("Computer gewinnt");
    // } else if (userWon === computerWon) {
    //     console.log("Unentschieden");
    // }
};
// + function for hide buttons
const hideButtons = () => {
    // after game display:none buttons
    if (rounds === currentRound) {
        const buttons = document.querySelectorAll("#chooseYourMove .btn button");
        buttons.forEach(button => {
            button.style.display = "none";
        });
        const btnWrapper = document.querySelector(".btn");
        btnWrapper.innerHTML = `<p> Restart the Game</p>`;
    }
};
// + reload game
//FIXME !!!!!!!!!!!!!!! ist das wirklich ne gute lösung !!!!!!!!!!!!!!
const restartGame = (event) => {
    location.reload();
};
// + function for write the results in HTML
const writeToHtml = (userChoice, computerChoice, winner, userWins, computerWins, currentRound) => {
    whoChoosedWhat.innerHTML = `User: ${userChoice}  -  Computer: ${computerChoice}`;
    winnerCurrentRoundOutput.innerHTML = winner;
    userWinOutput.innerHTML = userWins.toString();
    computerWinOutput.innerHTML = computerWins.toString();
};
// FIXME es wird gecheckt ob runden gewählt wurden. wenn ich auf einen button (ohne runden gewählt) klicke verschwinden die buttons zwar. aber der klick wird bereits gezählt.
//# sourceMappingURL=main.js.map