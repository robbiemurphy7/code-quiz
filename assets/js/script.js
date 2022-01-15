const startQuizButton = document.getElementById("start-btn");
const initialInfo = document.getElementById("initial-info")

startQuizButton.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("The quiz has begun.");

    startQuizButton.classList.add("hide");
    initialInfo.classList.add("hide");

    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 76;
    setInterval(setTime, 1000);

    function setTime() {
        --totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 76);
    }

    function pad(val) {
        var valString = val + "";
        if (valString.length <0) {
            return "0" + valString;
        } else {
            return valString;
        }
    }

}