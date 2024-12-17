// ANCHOR //= get elements from HTML and create variables

let rounds: number = 0;
let currentRound: number = 0;

// save current winnings
let computerWon: number = 0;
let userWon: number = 0;


let userChoose: string = "";

const stone = document.querySelector("#stone") as HTMLButtonElement;
const paper = document.querySelector("#paper") as HTMLButtonElement;
const scissors = document.querySelector("#scissors") as HTMLButtonElement;

// elements in the html that need to be filled
const whoChoosedWhat = document.querySelector("#whoChoosedWhat") as HTMLElement;
const userWinOutput = document.querySelector("#userWins") as HTMLElement;
const computerWinOutput = document.querySelector("#computerWins") as HTMLElement;
const winnerCurrentRoundOutput = document.querySelector("#winnerCurrentRound") as HTMLElement;


const restartBtn = document.querySelector("#restart") as HTMLElement;
const stonePaperScissors: string[] = ["Stein", "Papier", "Schere"];

const buttons = document.querySelectorAll("#chooseYourMove .btn button");


// ANCHOR //= functions
// + choosed Round
function addRounds() {
    //  checken ob rundenanzahl gewählt wurde. wenn nicht sind die buttons futsch
    if ((document.getElementById("5Rounds") as HTMLInputElement).checked) {
        rounds = 5;
        buttons.forEach(button => {
            (button as HTMLButtonElement).style.display = "block";
        });
    } else if ((document.getElementById("10Rounds") as HTMLInputElement).checked) {
        rounds = 10;
        buttons.forEach(button => {
            (button as HTMLButtonElement).style.display = "block";
        });
    } else if ((document.getElementById("15Rounds") as HTMLInputElement).checked) {
        rounds = 15;
        buttons.forEach(button => {
            (button as HTMLButtonElement).style.display = "block";
        });
    } else if ((document.getElementById("20Rounds") as HTMLInputElement).checked) {
        rounds = 20;
        buttons.forEach(button => {
            (button as HTMLButtonElement).style.display = "block";
        });
    } else {
        buttons.forEach(button => {
            (button as HTMLButtonElement).style.display = "none";
        });
    }
}

// + game
const game = (event: MouseEvent) => {
    event.preventDefault();


    const choosedBtn = (event.currentTarget as HTMLButtonElement).value;
    const choosedBtnToNumber: number = Number(choosedBtn);

    // //random number computer
    let compChoose: number = Math.floor(Math.random() * 3); // 0 = stone, 1 = paper, 2 = scissors

    // user and comp choosed the same
    if (choosedBtnToNumber === compChoose) {
        writeToHtml(stonePaperScissors[choosedBtnToNumber], stonePaperScissors[compChoose], "Unentschieden", userWon, computerWon, currentRound);
        currentRound++;

        // user win
    } else if (
        (choosedBtnToNumber === 0 && compChoose === 2) ||
        (choosedBtnToNumber === 1 && compChoose === 0) ||
        (choosedBtnToNumber === 2 && compChoose === 1)
    ) {
        writeToHtml(stonePaperScissors[choosedBtnToNumber], stonePaperScissors[compChoose], "User gewinnt", userWon, computerWon, currentRound);
        userWon++;
        currentRound++;

        // computer win
    } else {
        writeToHtml(stonePaperScissors[choosedBtnToNumber], stonePaperScissors[compChoose], "Computer gewinnt", userWon, computerWon, currentRound);
        computerWon++;
        currentRound++;
    }

    // hide buttons (stone, paper, scissors)
    hideButtons();

}
stone.addEventListener("click", game);
paper.addEventListener("click", game);
scissors.addEventListener("click", game);

// + function for who is the winner
//FIXME !!!!!!!!!!!!!!! läuft noch nicht !!!!!!!!!!!!!!
const theWinnerIs = (): void => {
    // if (userWon > computerWon) {
    //     console.log("User gewinnt");
    // } else if (computerWon > userWon) {
    //     console.log("Computer gewinnt");
    // } else if (userWon === computerWon) {
    //     console.log("Unentschieden");
    // }
}

// + function for hide buttons
const hideButtons = (): void => {
    // after game display:none buttons
    if (rounds === currentRound) {
        const buttons = document.querySelectorAll("#chooseYourMove .btn button");
        buttons.forEach(button => {
            (button as HTMLButtonElement).style.display = "none";
        });
        const btnWrapper = document.querySelector(".btn") as HTMLElement;
        btnWrapper.innerHTML = `<p> Restart the Game</p>`;
    }
}

// + reload game
//FIXME !!!!!!!!!!!!!!! ist das wirklich ne gute lösung !!!!!!!!!!!!!!
const restartGame = (event: MouseEvent) => {
    location.reload();
}

// + function for write the results in HTML
const writeToHtml = (userChoice: string, computerChoice: string, winner: string, userWins: number, computerWins: number, currentRound: number): void => {
    whoChoosedWhat.innerHTML = `User: ${userChoice}  -  Computer: ${computerChoice}`;
    winnerCurrentRoundOutput.innerHTML = winner;
    userWinOutput.innerHTML = userWins.toString();
    computerWinOutput.innerHTML = computerWins.toString();
}

// FIXME es wird gecheckt ob runden gewählt wurden. wenn ich auf einen button (ohne runden gewählt) klicke verschwinden die buttons zwar. aber der klick wird bereits gezählt.