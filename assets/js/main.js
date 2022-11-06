
// ausgewählte rundenanzahl
let rounds = 0;
console.log(rounds);

// aktuelle spielrunde
let currentRound = 0;

// anzahl wins computer
let computerWins = 0;

// anzahl wins nutzer
let userWins = 0;

let userChoose = "";


// wert von gewählter rundenanzahl holen
function addRounds() {
    const fiveRounds = document.getElementById("5Rounds").checked;
    const tenRounds = document.getElementById("10Rounds").checked;
    const fifteenRounds = document.getElementById("15Rounds").checked;

    if (fiveRounds) {
        rounds = 5;
        console.log("jetzt 5");
    } else if (tenRounds) {
        rounds = 10;
        console.log("jetzt 10");
    } else if (fifteenRounds) {
        rounds = 15;
        console.log("jetzt 15");
    } else {
        rounds = 20;
        console.log("jetzt 20");
    }
    console.log(rounds);
}

console.log(rounds);


// berechnung für stein
function chooseStone() {
    const btnStone = Number(document.getElementById("stone").value);
    rounds--;
    console.log(rounds);


    //random nummer für den computer
    let compChoose = Math.floor(Math.random() * 3);

    // vergleiche wenn user stein auswählt
    if (btnStone === compChoose) {
        document.getElementById("compOrUserWinOrDraw").innerHTML = "Unentschieden";
    } else if (compChoose === 1) {
        computerWins ++;
        document.getElementById("computerWins").innerHTML = computerWins;
        document.getElementById("compOrUserWinOrDraw").innerHTML = "Computer gewinnt";
    } else {
        userWins ++;
        document.getElementById("userWins").innerHTML = userWins;
        document.getElementById("compOrUserWinOrDraw").innerHTML = "User gewinnt";
    } 

    stopGameAtRoundZero();
}



// berechnung für papier
function choosePaper() {
    const btnPaper = Number(document.getElementById("paper").value);
    rounds--;

    //random nummer für den computer
    let compChoose = Math.floor(Math.random() * 3);

    // vergleiche wenn user papier auswählt
    if (btnPaper === compChoose) {
        document.getElementById("compOrUserWinOrDraw").innerHTML = "Unentschieden";
    } else if (compChoose === 2) {
        computerWins ++;
        document.getElementById("computerWins").innerHTML = computerWins;
        document.getElementById("compOrUserWinOrDraw").innerHTML = "Computer gewinnt";
    } else {
        userWins ++;
        document.getElementById("userWins").innerHTML = userWins;
        document.getElementById("compOrUserWinOrDraw").innerHTML = "User gewinnt";
    }

    stopGameAtRoundZero();
}

// berechnung für schere
function chooseScissors() {
    const btnScissors = Number(document.getElementById("scissors").value);
    rounds--;

    // random nummer für den computer
    let compChoose = Math.floor(Math.random() * 3);

    // vergleiche wenn user schere auswählt
    if (btnScissors === compChoose) {
        document.getElementById("compOrUserWinOrDraw").innerHTML = "Unentschieden";
    } else if (compChoose === 1) {
        userWins ++;
        document.getElementById("userWins").innerHTML = userWins;
        document.getElementById("compOrUserWinOrDraw").innerHTML = "User gewinnt";
    } else {
        computerWins ++;
        document.getElementById("computerWins").innerHTML = computerWins;
        document.getElementById("compOrUserWinOrDraw").innerHTML = "Computer gewinnt";
    }

    stopGameAtRoundZero();
}

// gibt den gewinner aus wenn runde 0 erreicht ist
const stopGameAtRoundZero = () => {
    if (rounds === 0 && computerWins === userWins) {
        document.getElementById("finalWinner").innerHTML = "Unentschieden";
    } else if (rounds === 0 && computerWins < userWins) {
        document.getElementById("finalWinner").innerHTML = "User gewinnt";
    } else if (rounds === 0) {
        document.getElementById("finalWinner").innerHTML = "Computer gewinnt";
    }
}

// bei klick auf restart rundenanzahl,compWins,userWins auf 0
function restartGame() {
    rounds = 0;
    document.getElementById("userWins").innerHTML = 0;
    document.getElementById("computerWins").innerHTML = 0;
    document.getElementById("finalWinner").innerHTML = "The Winner is";
    computerWins = 0;
}