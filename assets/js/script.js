const startQuizButton = document.querySelector("#start-btn");

startQuizButton.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("Quiz has begun.");
}

// TIMER
var secondsLabel = document.querySelector("#seconds");
var totalSeconds = 75;
setInterval(setTime, 1000);

function setTime() {
    --totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 75);
}

function pad(val) {
    var valString = val + "";
    if (valString.length <0) {
        return "0" + valString;
    } else {
        return valString;
    }
}