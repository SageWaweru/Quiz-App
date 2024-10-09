// import questions from 'quizquestions.js';
const topic = document.querySelector('.topic');
const difficulty = document.querySelector('.level');
const time = document.querySelector('.time');
const quizProgress = document.querySelector('.progress-bar');
const quizTimer = document.querySelector('.progress-text');
const currentQuestion = document.querySelector('.current-q');
const questionContainer = document.querySelector('.question');
const answer = document.querySelector('.answer-box');
const etime = document.getElementById('60sec');
const mtime = document.getElementById('30sec');
const dtime = document.getElementById('10sec');
let selectedTime = 60;

etime.addEventListener('click', () => setSelectedTime(60));
mtime.addEventListener('click', () => setSelectedTime(30));
dtime.addEventListener('click', () => setSelectedTime(10));

function setSelectedTime(time) {
    selectedTime = time;
    quizTimer.innerHTML = `${selectedTime}`;
    
};



const applyBTN = document.getElementById('apply');
applyBTN.addEventListener('click', () => applySettings());
function applySettings() {
setSelectedTime();
}


function progress(t) {
    const percentage = (t / selectedTime) * 100;
    quizProgress.style.width = `${percentage}%`;
    quizTimer.innerHTML = `${t}`;
}

function startTimer(){
    let timeLeft = selectedTime;

    const timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            quizTimer.innerHTML = "Time's up!";
        } else {
            progress(timeLeft);
            timeLeft--;
        }
    }, 1000);
}

const newGame= document.getElementById('new');
newGame.addEventListener('click', () => startTimer());
