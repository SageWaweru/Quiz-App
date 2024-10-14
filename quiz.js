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
const hint = document.getElementById("hint-btn");

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
      questionHint = currentQuestion.hint;
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

  hint.addEventListener("click", () => {
    alert(`Your hint is: ${questionHint}`);
  });

  feedbackElem.textContent = "";
  startTimer();
  hasTriedAgain = false;
}

function selectAnswer(selectedSpan) {
  const selectedAnswer = selectedSpan.textContent;
  const correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;

  if (timeLeft === 0) {
    answerSpans.forEach((span) => {
      if (span.textContent === correctAnswer) {
        span.style.backgroundColor = "green";
      }
    });
    return;
  }

  if (selectedAnswer === correctAnswer) {
    clearInterval(timer);
    selectedSpan.style.backgroundColor = "green";
    showFeedback(true);
    answerSpans.forEach((span) => (span.style.pointerEvents = "none"));
    return;
  }

  if (!hasTriedAgain) {
    selectedSpan.style.backgroundColor = "rgb(176, 19, 19)";
    showFeedback(false);
    hasTriedAgain = true;
    return;
  }

  if (hasTriedAgain && selectedAnswer !== correctAnswer) {
    selectedSpan.style.backgroundColor = "rgb(176, 19, 19)";
    showFeedback(false);
    answerSpans.forEach((span) => (span.style.pointerEvents = "none"));
    clearInterval(timer);
    return;
  }
}

function manageAnswer(selectedSpan) {
  const selectedAnswer = selectedSpan.textContent;
  const correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;
  if (timeLeft === 0) {
    answerSpans.forEach((span) => {
      if (span.textContent === correctAnswer) {
        span.style.backgroundColor = "green";
      }
    });
  } else if (timeLeft >= 1 && selectedAnswer === correctAnswer) {
    clearInterval(timer);
    showFeedback(true);
    selectedSpan.style.backgroundColor = "green";
    nextBtn.style.display = "block";
    answerSpans.forEach((span) => (span.style.pointerEvents = "none"));
  } else if (
    timeLeft >= 1 &&
    selectedAnswer === !correctAnswer &&
    hasTriedAgain
  ) {
    clearInterval(timer);
    showFeedback(false);
    selectedSpan.style.backgroundColor = "rgb(176, 19, 19)";
    nextBtn.style.display = "block";
    answerSpans.forEach((span) => (span.style.pointerEvents = "none"));
  }
}

function showFeedback(isCorrect) {
  if (isCorrect) {
    feedbackElem.textContent = "Correct!";
    feedbackElem.style.color = "green";

    score += 10;
  } else if (!isCorrect && timeLeft >= 1 && !hasTriedAgain) {
    feedbackElem.textContent = "Try again";
    feedbackElem.style.color = "#6953FF";
  } else {
    feedbackElem.textContent = "Wrong!";
    feedbackElem.style.color = "rgb(176, 19, 19)";
  }

  nextBtn.style.display = "block";
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
    if (timeLeft >= 1) {
      timeLeft--;
      timerElem.textContent = timeLeft;
      progress(timeLeft);
    } else {
      clearInterval(timer);
      timerElem.textContent = "Time is up!";
      answerSpans.forEach((span) => {
        if (
          span.textContent ===
          shuffledQuestions[currentQuestionIndex].correctAnswer
        ) {
          span.style.backgroundColor = "green";
        }
      });
      showFeedback(false);
    }
  }, 1000);
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex >= shuffledQuestions.length) {
    localStorage.setItem("score", score);

    const currentPage = window.location.href;
    let scoreboardUrl;

    if (currentPage.includes("quiz%20copy.html")) {
      scoreboardUrl = "scoreboard%20copy.html";
    } else {
      scoreboardUrl = "scoreboard.html";
    }

    window.location.href = scoreboardUrl;
  } else {
    nextBtn.style.display = "none";
    loadQuestion();
  }
});

window.onload = initializeQuiz;
