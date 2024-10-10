const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get("level") || "htmleasy";

let score = 0;
let timer;
let timeLeft = 30;
const maxQuestions = 10;
let shuffledQuestions = [];
let currentQuestionIndex = 0;

const questionElem = document.getElementById("question");
const answerSpans = document.querySelectorAll(".answer");
const feedbackElem = document.getElementById("feedback");
const timerElem = document.getElementById("time-left");
const nextBtn = document.getElementById("next-btn");
const quizProgress = document.querySelector(".progress-bar");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initializeQuiz() {
  shuffledQuestions = shuffleArray(questions[level].slice()).slice(
    0,
    maxQuestions
  );
  currentQuestionIndex = 0;
  loadQuestion();
}

function loadQuestion() {
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  questionElem.textContent = currentQuestion.question;

  answerSpans.forEach((span, index) => {
    if (currentQuestion.possibleAnswers[index]) {
      span.textContent = currentQuestion.possibleAnswers[index];
      span.style.cursor = "pointer";
      span.style.display = "inline-block";
      span.onclick = () => selectAnswer(span);
      span.style.pointerEvents = "auto";
      span.style.backgroundColor = "";
    } else {
      span.style.display = "none";
    }
  });

  feedbackElem.textContent = "";
  startTimer();
}

function selectAnswer(selectedSpan) {
  clearInterval(timer);
  const selectedAnswer = selectedSpan.textContent;
  const correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;

  answerSpans.forEach((span) => (span.style.pointerEvents = "none"));

  if (selectedAnswer === correctAnswer) {
    selectedSpan.style.backgroundColor = "green";
    showFeedback(true);
  } else {
    selectedSpan.style.backgroundColor = "rgb(176, 19, 19)";
    showFeedback(false);

    answerSpans.forEach((span) => {
      if (span.textContent === correctAnswer) {
        span.style.backgroundColor = "green";
      }
    });
  }
}

function showFeedback(isCorrect) {
  if (isCorrect) {
    feedbackElem.textContent = "Correct!";
    score += 10;
  } else {
    feedbackElem.textContent = "Wrong!";
  }

  nextBtn.style.display = "block";
  feedbackElem.style.color = "bisque";
}

function progress(time) {
  const percentage = (time / 30) * 100;
  quizProgress.style.width = `${percentage}%`;
  quizTimer.innerHTML = `${time}`;
}

function startTimer() {
  timeLeft = 30;
  timerElem.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerElem.textContent = timeLeft;
    progress(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timer);
      showFeedback(false);
    }
  }, 1000);
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex >= shuffledQuestions.length) {
    localStorage.setItem("score", score);
    window.location.href = "scoreboard.html";
  } else {
    nextBtn.style.display = "none";
    loadQuestion();
  }
});

window.onload = initializeQuiz;
