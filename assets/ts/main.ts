// ANCHOR //= get elements from HTML and create variables




// elements for eventListenes
const stone = document.querySelector("#stone") as HTMLButtonElement;
const paper = document.querySelector("#paper") as HTMLButtonElement;
const scissors = document.querySelector("#scissors") as HTMLButtonElement;

// elements in the html that need to be filled
const whoChoosedWhat = document.querySelector("#whoChoosedWhat") as HTMLElement;
const userWinOutput = document.querySelector("#userWins") as HTMLElement;
const computerWinOutput = document.querySelector("#computerWins") as HTMLElement;
const winnerCurrentRoundOutput = document.querySelector("#winnerCurrentRound") as HTMLElement;
const finalWinner = document.querySelector(".final-winner") as HTMLElement;

const restartBtn = document.querySelector("#restart") as HTMLElement;
const stonePaperScissors: string[] = ["Stein", "Papier", "Schere"];

// ! wenn ich die id radio-btn zu class änder funktioniert es nicht mehr. wieso????
const radioWrapper = document.querySelector("#radio-btn") as HTMLElement;


let rounds: number = 0;

// save current winnings
let computerWon: number = 0;
let userWon: number = 0;

// ANCHOR PLAY GAME
stone.addEventListener("click", playTheGame);
paper.addEventListener("click", playTheGame);
scissors.addEventListener("click", playTheGame);

radioWrapper.addEventListener("click", addRounds);

// ANCHOR after round are choosed, start the game
// + choosed Round
function addRounds() {
    const selectedRadio = document.querySelector('input[name="numberOfRounds"]:checked') as HTMLInputElement;
    const roundNecessary = document.querySelector("#radio-btn div p") as HTMLElement;

    if (selectedRadio !== null) {
        rounds = Number(selectedRadio.value);
        console.log(`Ausgewählte Rundenanzahl: ${rounds}`);
        // roundNecessary.style.display = "none";
        roundNecessary.innerText = `Du hast ${rounds} Runden gewählt`;
        roundNecessary.style.color = "black";

        const buttons = document.querySelectorAll(".btn button");
        buttons.forEach(button => {
            (button as HTMLButtonElement).style.display = "block";
        });
    }
}

// + game
function playTheGame(event: MouseEvent) {
    // rundenanzahl speichern
    // spiel starten durch klick auf einen der 3 buttons
    // checken wer in der aktuellen runde gewonnen hat und rundenanzahl erhöhen sowie dem spieler der gewonnen hat einen punkt geben
    // checken ob die gewählte rundenanzahl erreicht wurde
    // finalen gewinner ausgeben
    // möglichkeit spiel neu starten

    compareRound(event);
    theFinalWinnerIs();
    // hideButtons();
}


function compareRound(event: MouseEvent) {
    const choosedBtn = (event.currentTarget as HTMLButtonElement).value;
    const choosedBtnToNumber: number = Number(choosedBtn);

    // //random number computer
    let compChoose: number = Math.floor(Math.random() * 3); // 0 = stone, 1 = paper, 2 = scissors

    // user and comp choosed the same
    if (choosedBtnToNumber === compChoose) {
        rounds--;
        writeToHtml(stonePaperScissors[choosedBtnToNumber], stonePaperScissors[compChoose], "Unentschieden", userWon, computerWon);

        // user win
    } else if (
        (choosedBtnToNumber === 0 && compChoose === 2) ||
        (choosedBtnToNumber === 1 && compChoose === 0) ||
        (choosedBtnToNumber === 2 && compChoose === 1)
    ) {
        userWon++;
        rounds--;
        writeToHtml(stonePaperScissors[choosedBtnToNumber], stonePaperScissors[compChoose], "User gewinnt", userWon, computerWon);

        // computer win
    } else {
        computerWon++;
        rounds--;
        writeToHtml(stonePaperScissors[choosedBtnToNumber], stonePaperScissors[compChoose], "Computer gewinnt", userWon, computerWon);
    }
}

// + function for hide buttons
// const hideButtons = (): void => {
//     if (rounds === 0) {
//         const buttons = document.querySelectorAll("#chooseYourMove .btn button");
//         buttons.forEach(button => {
//             (button as HTMLButtonElement).style.display = "none";
//         });
//         const btnWrapper = document.querySelector(".btn") as HTMLElement;
//         btnWrapper.innerHTML = `<p> Restart the Game</p>`;
//     }
// }

// + function for write the results in HTML
const writeToHtml = (userChoice: string, computerChoice: string, winner: string, userWins: number, computerWins: number): void => {
    whoChoosedWhat.innerHTML = `User: ${userChoice}  -  Computer: ${computerChoice}`;
    winnerCurrentRoundOutput.innerHTML = winner;
    userWinOutput.innerHTML = userWins.toString();
    computerWinOutput.innerHTML = computerWins.toString();
}

// + function for who is the winner
const theFinalWinnerIs = (): void => {
    if (rounds === 0) {
        if (userWon > computerWon) {
            winnerCurrentRoundOutput.style.display = "none"
            finalWinner.innerText = "User hat gewonnen"
            // visibility = false;
        } else if (computerWon > userWon) {
            winnerCurrentRoundOutput.style.display = "none"
            finalWinner.innerText = "Computer hat gewonnen"
            // visibility = false;

        } else if (userWon === computerWon) {
            winnerCurrentRoundOutput.style.display = "none"
            finalWinner.innerText = "Unentschieden"
            // visibility = false;
        }
    }

}

// + reload game
const restartGame = (event: MouseEvent) => {
    location.reload();
}

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