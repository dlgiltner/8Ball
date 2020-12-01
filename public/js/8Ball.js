function flipBall() {
    const ballImage = document.getElementById('eightBall');
    eightBall.src = "public/img/8ballback.png";
    eightBall.alt = "Enchanted 8 Ball showing an answer.";
    const answer = document.getElementById('answer');
    const randomNum = Math.floor(Math.random() * 20) + 1;
    switch (randomNum) {
        case 1:
            answer.innerHTML = "Yes";
            break;
        case 2:
            answer.innerHTML = "No";
            break;
        case 3:
            answer.innerHTML = "Maybe";
            break;
        case 4:
            answer.innerHTML = "Absolutely!";
            break;
        case 5:
            answer.innerHTML = "Definitely";
            break;
        case 6:
            answer.innerHTML = "No Doubt";
            break;
        case 7:
            answer.innerHTML = "Never";
            break;
        case 8:
            answer.innerHTML = "Bet on it!";
            break;
        case 9:
            answer.innerHTML = "Perhaps";
            break;
        case 10:
            answer.innerHTML = "Very Likely";
            break;
        case 11:
            answer.innerHTML = "Certainly!";
            break;
        case 12:
            answer.innerHTML = "Doubtful";
            break;
        case 13:
            answer.innerHTML = "Ask Again<br>Later";
            break;
        case 14:
            answer.innerHTML = "Chances<br>Are Good";
            break;
        case 15:
            answer.innerHTML = "Chances<br>Are Bad";
            break;
        case 16:
            answer.innerHTML = "Future<br>Unclear";
            break;
        case 17:
            answer.innerHTML = "Probably";
            break;
        case 18:
            answer.innerHTML = "Not sure";
            break;
        case 19:
            answer.innerHTML = "That's a No";
            break;
        case 20:
            answer.innerHTML = "That's a Yes!";
            break;
        default:
            answer.innerHTML = "Error";
    }
}

function resetBall() {
    const ballImage = document.getElementById('eightBall');
    eightBall.src = "public/img/8ballfront.png";
    eightBall.alt = "Enchated 8 Ball showing the number 8.";
    const answer = document.getElementById('answer');
    answer.innerHTML = "";
    const question = document.getElementById("question");
    question.value = "";
}