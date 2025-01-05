"use strict";
// ANCHOR //= get elements from HTML and create variables
// elements for eventListenes
const stone = document.querySelector("#stone");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
// elements in the html that need to be filled
const whoChoosedWhat = document.querySelector("#whoChoosedWhat");
const userWinOutput = document.querySelector("#userWins");
const computerWinOutput = document.querySelector("#computerWins");
const winnerCurrentRoundOutput = document.querySelector("#winnerCurrentRound");
const finalWinner = document.querySelector(".final-winner");
const restartBtn = document.querySelector("#restart");
const stonePaperScissors = ["Stein", "Papier", "Schere"];
const radioWrapper = document.querySelector("#radio-btn");
let rounds = 0;
// save current winnings
let computerWon = 0;
let userWon = 0;
// ANCHOR PLAY GAME
stone.addEventListener("click", playTheGame);
paper.addEventListener("click", playTheGame);
scissors.addEventListener("click", playTheGame);
radioWrapper.addEventListener("click", addRounds);
// ANCHOR after round are choosed, start the game
// + choosed Round
function addRounds() {
    const selectedRadio = document.querySelector('input[name="numberOfRounds"]:checked');
    const roundNecessary = document.querySelector("#radio-btn div p");
    if (selectedRadio !== null) {
        rounds = Number(selectedRadio.value);
        console.log(`Ausgewählte Rundenanzahl: ${rounds}`);
        // roundNecessary.style.display = "none";
        roundNecessary.innerText = `Du hast ${rounds} Runden gewählt`;
        roundNecessary.style.color = "black";
        const buttons = document.querySelectorAll(".btn button");
        buttons.forEach(button => {
            button.style.display = "block";
        });
    }
}
// + game
function playTheGame(event) {
    // rundenanzahl speichern
    // spiel starten durch klick auf einen der 3 buttons
    // checken wer in der aktuellen runde gewonnen hat und rundenanzahl erhöhen sowie dem spieler der gewonnen hat einen punkt geben
    // checken ob die gewählte rundenanzahl erreicht wurde
    // finalen gewinner ausgeben
    // möglichkeit spiel neu starten
    compareRound(event);
    theFinalWinnerIs();
    hideButtons();
}
function compareRound(event) {
    const choosedBtn = event.currentTarget.value;
    const choosedBtnToNumber = Number(choosedBtn);
    // //random number computer
    let compChoose = Math.floor(Math.random() * 3); // 0 = stone, 1 = paper, 2 = scissors
    // user and comp choosed the same
    if (choosedBtnToNumber === compChoose) {
        rounds--;
        writeToHtml(stonePaperScissors[choosedBtnToNumber], stonePaperScissors[compChoose], "Unentschieden", userWon, computerWon);
        // user win
    }
    else if ((choosedBtnToNumber === 0 && compChoose === 2) ||
        (choosedBtnToNumber === 1 && compChoose === 0) ||
        (choosedBtnToNumber === 2 && compChoose === 1)) {
        userWon++;
        rounds--;
        writeToHtml(stonePaperScissors[choosedBtnToNumber], stonePaperScissors[compChoose], "User gewinnt", userWon, computerWon);
        // computer win
    }
    else {
        computerWon++;
        rounds--;
        writeToHtml(stonePaperScissors[choosedBtnToNumber], stonePaperScissors[compChoose], "Computer gewinnt", userWon, computerWon);
    }
}
// + function for hide buttons
const hideButtons = () => {
    if (rounds === 0) {
        const buttons = document.querySelectorAll("#chooseYourMove .btn button");
        buttons.forEach(button => {
            button.style.display = "none";
        });
        const btnWrapper = document.querySelector(".btn");
        btnWrapper.innerHTML = `<p> Restart the Game</p>`;
    }
};
// + function for write the results in HTML
const writeToHtml = (userChoice, computerChoice, winner, userWins, computerWins) => {
    whoChoosedWhat.innerHTML = `User: ${userChoice}  -  Computer: ${computerChoice}`;
    winnerCurrentRoundOutput.innerHTML = winner;
    userWinOutput.innerHTML = userWins.toString();
    computerWinOutput.innerHTML = computerWins.toString();
};
// + function for who is the winner
const theFinalWinnerIs = () => {
    if (rounds === 0) {
        if (userWon > computerWon) {
            winnerCurrentRoundOutput.style.display = "none";
            finalWinner.innerText = "User hat gewonnen";
            // visibility = false;
        }
        else if (computerWon > userWon) {
            winnerCurrentRoundOutput.style.display = "none";
            finalWinner.innerText = "Computer hat gewonnen";
            // visibility = false;
        }
        else if (userWon === computerWon) {
            winnerCurrentRoundOutput.style.display = "none";
            finalWinner.innerText = "Unentschieden";
            // visibility = false;
        }
    }
};
// + reload game
const restartGame = (event) => {
    location.reload();
};
// FIXME es wird gecheckt ob runden gewählt wurden. wenn ich auf einen button (ohne runden gewählt) klicke verschwinden die buttons zwar. aber der klick wird bereits gezählt.
// VON MARCO
// let userChoose: string = "";
// let visibility = true;
// let roundValue = ["5", "10", "15", "20"];
// roundValue.map((i) => {
//     const radioBtn = document.createElement("input");
//     rounds = Number(i);
//     radioBtn.type = "radio";
//     radioBtn.value = i;
//     btnWrapper.appendChild(radioBtn);
// })
// TODO schließicon für das modalfenster
// TODO styling anpassen
// TODO modalfenster default auf none
// ! MODAL 
// const modalContainer = document.querySelector(".modal-container") as HTMLDivElement;
// const modalBtn = document.querySelector(".rules-btn") as HTMLButtonElement;
// modalBtn.addEventListener("click", showHiddenModal);
// const modalClass = "modal";
// function showHiddenModal(): void {
//     if (modalContainer.classList.contains(modalClass)) {
//         modalContainer.classList.remove(modalClass)
//     } else {
//         modalContainer.classList.add(modalClass);
//     }
//     // modalContainer.classList.contains(modalClass) ? modalContainer.classList.remove(modalClass) : modalContainer.classList.add(modalClass);
// }
//# sourceMappingURL=main.js.map