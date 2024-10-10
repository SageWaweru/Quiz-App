const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('level') || 'htmleasy';
let currentQuestionIndex = 0;
let score = 0;
let timer;
let selectedTime=60;


const quizProgress = document.querySelector('.progress-bar');
const quizTimer = document.querySelector('.progress-text');
const currentQuestion = document.querySelector('.current-q');
const questionDisplay = document.querySelector('.question')
const questionContainer = document.querySelector('.question-box');
const answerChoices = document.querySelector('.answer');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

let shuffledQuestions = [];

function initializeQuiz() {
    shuffledQuestions = [...questions[level]]; 
    shuffle(shuffledQuestions); 
    displayQuestion();
}


function displayQuestion() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    currentQuestion.innerHTML = `${currentQuestionIndex + 1} / ${shuffledQuestions.length}`;

    answerChoices.forEach((choice, index) => {
        const choiceText = choice.querySelector('.text'); 
        if (currentQuestion.answers[index]) {
            choiceText.textContent = currentQuestion.answers[index];
            choice.style.display = ''; 
        } else {
            choice.style.display = 'none'; 
        }
    });

    startTimer();
}

function progress(time) {
        const percentage = (time / selectedTime) * 100;
        quizProgress.style.width = `${percentage}%`;
        quizTimer.innerHTML = `${time}`;
    }

    function startTimer(){
            let timeLeft = selectedTime;
        
            timer = setInterval(() => {
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    quizTimer.innerHTML = "Time's up!";
                } else {
                    progress(timeLeft);
                    timeLeft--;
                }
            }, 1000);
        }

function selectAnswer(index) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (index === currentQuestion.correct) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong answer! The correct answer was: " + currentQuestion.answers[currentQuestion.correct]);
    }
    clearInterval(timer);
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    alert(`Quiz Over! Your score: ${score}/${shuffledQuestions.length}`);
}

answerChoices.forEach((choice, index) => {
    choice.addEventListener('click', () => selectAnswer(index));
});


window.onload = initializeQuiz;

 