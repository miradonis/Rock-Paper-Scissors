
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
        console.log(rounds);    
    } else if (tenRounds) {
        rounds = 10;
        console.log("jetzt 10");
        console.log(rounds);
    } else if (fifteenRounds) {
        rounds = 15;
        console.log("jetzt 15");
        console.log(rounds);
    } else {
        rounds = 20;
        console.log("jetzt 20");
    console.log(rounds);
}
}
console.log(rounds);


// berechnung für stein
function chooseStone() {
    const btnStone = Number(document.getElementById("stone").value);
    console.log("Runden: " + rounds);
    rounds--;
    console.log("Runden: " + rounds);

    if (rounds < 5) {
        alert("Bitte Runden wählen");
        window.location.reload();
    }

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

    if (rounds === 0 && computerWins === userWins) {
        document.getElementById("finalWinner").innerHTML = "Unentschieden";
    } else if (rounds === 0 && computerWins < userWins) {
        document.getElementById("finalWinner").innerHTML = "User gewinnt";
    } else if (rounds === 0) {
        document.getElementById("finalWinner").innerHTML = "Computer gewinnt";
    }
}



// berechnung für papier
function choosePaper() {
    const btnPaper = Number(document.getElementById("paper").value);
    console.log("Runden: " + rounds);
    rounds--;
    console.log("Runden: " + rounds);

    if (rounds < 5) {
        alert("Bitte Runden wählen");
        window.location.reload();
    }

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

    if (rounds === 0 && computerWins === userWins) {
        document.getElementById("finalWinner").innerHTML = "Unentschieden";
    } else if (rounds === 0 && computerWins < userWins) {
        document.getElementById("finalWinner").innerHTML = "User gewinnt";
    } else if (rounds === 0) {
        document.getElementById("finalWinner").innerHTML = "Computer gewinnt";
    }
}

// berechnung für schere
function chooseScissors() {
    const btnScissors = Number(document.getElementById("scissors").value);
    console.log("Runden: " + rounds);
    rounds--;
    console.log("Runden: " + rounds);

    if (rounds < 5) {
        alert("Bitte Runden wählen");
        window.location.reload();
    }

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

    if (rounds === 0 && computerWins === userWins) {
        document.getElementById("finalWinner").innerHTML = "Unentschieden";
    } else if (rounds === 0 && computerWins < userWins) {
        document.getElementById("finalWinner").innerHTML = "User gewinnt";
    } else if (rounds === 0) {
        document.getElementById("finalWinner").innerHTML = "Computer gewinnt";
    }
}