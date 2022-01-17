const startQuizButton = document.getElementById("start-btn");
const initialInfo = document.getElementById("initial-info");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startQuizButton.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("Quiz starts");

    startQuizButton.classList.add("hide");
    initialInfo.classList.add("hide");

    shuffledQuestions = question.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;

    questionContainer.classList.remove("hide");

    setNextQuestion();

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

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button. addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const question = [
    {
        question: "Which of the following logical operators refers to the (OR) / “OR” operator?",
        answers: [
            { text: "1. ??", correct: false },
            { text: "2. !", correct: false },
            { text: "3. ||", correct: true },
            { text: "4. &&", correct: false },
        ]
    }
]