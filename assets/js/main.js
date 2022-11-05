
// ausgewählte rundenanzahl
let rounds = 0;

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
}    


// berechnung für stein
function chooseStone() {
    const btnStone = Number(document.getElementById("stone").value);
    

    //random nummer für den computer
    let compChoose = Math.floor(Math.random() * 3);

    // vergleiche wenn user stein auswählt
    if (btnStone === compChoose) {
        console.log("unentschieden");
        rounds -- ;
    } else if (compChoose === 1) {
        console.log("comp gewinnt");
        computerWins ++;
        rounds --;
        document.getElementById("computerWins").innerHTML = computerWins;
    } else {
        console.log("ich gewinne");
        userWins ++;
        document.getElementById("userWins").innerHTML = userWins;
        rounds --;
    } 

    if (rounds === 0 && computerWins === userWins) {
        console.log("Unentschieden");
        document.getElementById("finalWinner").innerHTML = "Unentschieden";
    } else if (rounds === 0 && computerWins < userWins) {
        console.log("Ich habe gewonnen");
        document.getElementById("finalWinner").innerHTML = "User gewinnt";
    } else if (rounds === 0) {
        console.log("Computer hat gewonnen");
        document.getElementById("finalWinner").innerHTML = "Computer gewinnt";
    }
}

// berechnung für papier
function choosePaper() {
    const btnPaper = Number(document.getElementById("paper").value);

    //random nummer für den computer
    let compChoose = Math.floor(Math.random() * 3);

    // vergleiche wenn user papier auswählt
    if (btnPaper === compChoose) {
        console.log("unentschieden");
        rounds -- ;
    } else if (compChoose === 2) {
        console.log("comp gewinnt");
        computerWins ++;
        document.getElementById("computerWins").innerHTML = computerWins;
        rounds -- ;
    } else {
        console.log("ich gewinne");
        userWins ++;
        document.getElementById("userWins").innerHTML = userWins;
        rounds -- ;
    }

    if (rounds === 0 && computerWins === userWins) {
        console.log("Unentschieden");
        document.getElementById("finalWinner").innerHTML = "Unentschieden";
    } else if (rounds === 0 && computerWins < userWins) {
        console.log("Ich habe gewonnen");
        document.getElementById("finalWinner").innerHTML = "User gewinnt";
    } else if (rounds === 0) {
        console.log("Computer hat gewonnen");
        document.getElementById("finalWinner").innerHTML = "Computer gewinnt";
    }
}

// berechnung für schere
function chooseScissors() {
    const btnScissors = Number(document.getElementById("scissors").value);

    // random nummer für den computer
    let compChoose = Math.floor(Math.random() * 3);

    // vergleiche wenn user schere auswählt
    if (btnScissors === compChoose) {
        console.log("unentschieden");
        rounds -- ;
    } else if (compChoose === 1) {
        console.log("ich gewinne");
        userWins ++;
        document.getElementById("userWins").innerHTML = userWins;
        rounds -- ;
    } else {
        console.log("comp gewinnt");
        computerWins ++;
        document.getElementById("computerWins").innerHTML = computerWins;
        rounds -- ;
    }

    if (rounds === 0 && computerWins === userWins) {
        console.log("Unentschieden");
        document.getElementById("finalWinner").innerHTML = "Unentschieden";
    } else if (rounds === 0 && computerWins < userWins) {
        console.log("Ich habe gewonnen");
        document.getElementById("finalWinner").innerHTML = "User gewinnt";
    } else if (rounds === 0) {
        console.log("Computer hat gewonnen");
        document.getElementById("finalWinner").innerHTML = "Computer gewinnt";
    }
}


function restartGame() {
    rounds = 0;
    document.getElementById("userWins").innerHTML = 0;
    document.getElementById("computerWins").innerHTML = 0;
    document.getElementById("finalWinner").innerHTML = "The Winner is";
    computerWins = 0;
}