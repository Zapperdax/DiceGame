var result = document.getElementById("result");
var winnerStatus = document.querySelector("h2");


result.onclick = () => {
    var playerOneDice = Math.floor(Math.random() * 6) + 1;
    console.log(playerOneDice);
    var playerTwoDice = Math.floor(Math.random() * 6) + 1;
    console.log(playerTwoDice);
    var playerOneImage = document.getElementById("imgOne");
    var playerTwoImage = document.getElementById("imgTwo");

    playerOneFunction();
    playerTwoFunction();
    if (playerOneDice > playerTwoDice) {
        winnerStatus.innerHTML = "Player One Won";
    }
    else if (playerTwoDice > playerOneDice) {
        winnerStatus.innerHTML = "Player Two Won";
    }
    else {
        winnerStatus.innerHTML = "Draw, Both Got Same Roll";
    }

    function playerOneFunction() {
        if (playerOneDice === 1) {
            playerOneImage.src = "Images/1.png";
        }
        else if (playerOneDice === 2) {
            playerOneImage.src = "Images/2.png";
        }
        else if (playerOneDice === 3) {
            playerOneImage.src = "Images/3.png";
        }
        else if (playerOneDice === 4) {
            playerOneImage.src = "Images/4.png";
        }
        else if (playerOneDice === 5) {
            playerOneImage.src = "Images/5.png";
        }
        else if (playerOneDice === 6) {
            playerOneImage.src = "Images/6.png";
        }
        else {
            console.log("Error");
        }
    }
    function playerTwoFunction() {
        if (playerTwoDice === 1) {
            playerTwoImage.src = "Images/1.png";
        }
        else if (playerTwoDice === 2) {
            playerTwoImage.src = "Images/2.png";
        }
        else if (playerTwoDice === 3) {
            playerTwoImage.src = "Images/3.png";
        }
        else if (playerTwoDice === 4) {
            playerTwoImage.src = "Images/4.png";
        }
        else if (playerTwoDice === 5) {
            playerTwoImage.src = "Images/5.png";
        }
        else if (playerTwoDice === 6) {
            playerTwoImage.src = "Images/6.png";
        }
        else {
            console.log("Error");
        }
    }
}
