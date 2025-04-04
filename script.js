// Global variables for quiz state
let filteredQuestions = [];  // Questions chosen for the test based on chapter/all selection
let quizOrder = [];          // Order of question indices for the quiz
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let totalSeconds = 0;
let orderMode = 'sequential';   // 'sequential' or 'random'
let userAnswers = [];       // Records: { selected, correct, voided } for each question
let selectedOption = null;  // Current selection before submission

// DOM elements (home page)
const homeDiv = document.getElementById('home');
const startTestingBtn = document.getElementById('start-testing-btn');
const setupOptionsDiv = document.getElementById('setup-options');
const modeOptions = document.getElementsByName('chapter-mode');
const chapterDropdown = document.getElementById('chapter-dropdown');
const chapterSelect = document.getElementById('chapter-select');
const beginQuizBtn = document.getElementById('begin-quiz-btn');

// Toggle DOM elements
const sequentialBtn = document.getElementById('sequential-btn');
const randomBtn = document.getElementById('random-btn');
const randomOptionsDiv = document.getElementById('random-options');

// DOM elements (quiz page)
const quizPageDiv = document.getElementById('quiz-page');
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const submitBtn = document.getElementById('submit-btn');
const voidBtn = document.getElementById('void-btn'); // Void Question button
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const scoreSpan = document.getElementById('score');
const timerSpan = document.getElementById('timer');
const resultsDiv = document.getElementById('results');
const finalScoreSpan = document.getElementById('final-score');
const finalPercentage = document.getElementById('final-percentage');
const restartBtn = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

// Dark Mode Toggle
const darkToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeIcon.textContent = "☀️";
  } else {
    darkModeIcon.textContent = "🌙";
  }
});

// Home Page: Start Testing button click
startTestingBtn.addEventListener('click', () => {
  startTestingBtn.style.display = "none";
  setupOptionsDiv.style.display = "block";
});

// When user selects a testing mode (specific chapter or all chapters)
modeOptions.forEach(option => {
  option.addEventListener('change', () => {
    if (option.value === "specific") {
      chapterDropdown.style.display = "block";
    } else {
      chapterDropdown.style.display = "none";
    }
  });
});

// Toggle for Order Selection (segmented control)
sequentialBtn.addEventListener('click', () => {
  orderMode = 'sequential';
  sequentialBtn.classList.add('active');
  randomBtn.classList.remove('active');
  randomOptionsDiv.style.display = "none";
});
randomBtn.addEventListener('click', () => {
  orderMode = 'random';
  randomBtn.classList.add('active');
  sequentialBtn.classList.remove('active');
  randomOptionsDiv.style.display = "block";
});

// When user clicks "Begin Quiz"
beginQuizBtn.addEventListener('click', () => {
  let selectedMode = document.querySelector('input[name="chapter-mode"]:checked').value;
  
  if (selectedMode === "specific") {
    let chapter = chapterSelect.value;
    if (chapter === "3") {
      filteredQuestions = allQuestionsData.filter(q => q.number >= 1 && q.number <= 90);
    } else if (chapter === "4") {
      filteredQuestions = allQuestionsData.filter(q => q.number >= 91 && q.number <= 328);
    } else if (chapter === "6") {
      filteredQuestions = allQuestionsData.filter(q => q.number >= 329 && q.number <= 416);
    } else if (chapter === "7") {
      filteredQuestions = allQuestionsData.filter(q => q.number >= 417);
    }
  } else {
    filteredQuestions = allQuestionsData.slice();
  }
  
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = score;
  userAnswers = new Array(filteredQuestions.length).fill(null);
  initQuizOrder();
  
  if (orderMode === 'random' && document.getElementById('num-questions').value) {
    let requested = parseInt(document.getElementById('num-questions').value);
    if (requested > 0 && requested < quizOrder.length) {
      quizOrder = quizOrder.slice(0, requested);
    }
  }
  
  updateProgress();
  homeDiv.style.display = "none";
  quizPageDiv.style.display = "block";
  startTimer();
  renderQuestion();
});

// Shuffle helper function
function shuffleArray(array) {
  let copy = array.slice();
  copy.sort(() => Math.random() - 0.5);
  return copy;
}

// Initialize quiz order
function initQuizOrder() {
  quizOrder = [];
  for (let i = 0; i < filteredQuestions.length; i++) {
    quizOrder.push(i);
  }
  if (orderMode === 'random') {
    quizOrder = shuffleArray(quizOrder);
  }
}

// Timer functions
function startTimer() {
  totalSeconds = 0;
  timerInterval = setInterval(() => {
    totalSeconds++;
    let minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    let seconds = (totalSeconds % 60).toString().padStart(2, '0');
    timerSpan.textContent = `${minutes}:${seconds}`;
  }, 1000);
}
function stopTimer() {
  clearInterval(timerInterval);
}

// Render current question and options with randomized order and sequential labels
function renderQuestion() {
  selectedOption = null;
  submitBtn.disabled = true;
  nextBtn.disabled = true;
  
  optionsList.innerHTML = "";
  
  let displayQuestionNumber = currentQuestionIndex + 1;
  let q = filteredQuestions[quizOrder[currentQuestionIndex]];
  questionText.textContent = "Question " + displayQuestionNumber + ": " + q.text;
  
  let optionsArray = Object.keys(q.options).map(originalKey => {
    return { originalKey: originalKey, text: q.options[originalKey] };
  });
  optionsArray = shuffleArray(optionsArray);
  
  const labels = "abcdefghijklmnopqrstuvwxyz";
  optionsArray.forEach((option, index) => {
    let li = document.createElement('li');
    let btn = document.createElement('button');
    let newLabel = labels[index];
    btn.textContent = newLabel + ") " + option.text;
    btn.dataset.originalKey = option.originalKey;
    
    if (userAnswers[quizOrder[currentQuestionIndex]]) {
      const userAnswer = userAnswers[quizOrder[currentQuestionIndex]].selected;
      if (option.originalKey === q.answer) {
        btn.classList.add('correct');
      }
      if (userAnswer === option.originalKey && userAnswer !== q.answer) {
        btn.classList.add('wrong');
      }
      btn.disabled = true;
    } else {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#options-list button').forEach(b => {
          b.classList.remove('selected');
        });
        btn.classList.add('selected');
        selectedOption = btn.dataset.originalKey;
        submitBtn.disabled = false;
      });
    }
    
    li.appendChild(btn);
    optionsList.appendChild(li);
  });
  
  updateNavButtons();
  updateProgress();
}

// Handle answer submission with feedback and animation
submitBtn.addEventListener('click', () => {
  let q = filteredQuestions[quizOrder[currentQuestionIndex]];
  if (!selectedOption) return;
  
  const buttons = document.querySelectorAll('#options-list button');
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.originalKey === q.answer) {
      btn.classList.add('correct');
      let cue = document.createElement('span');
      cue.classList.add('visual-cue');
      cue.textContent = "✓";
      btn.appendChild(cue);
    }
    if (btn.dataset.originalKey === selectedOption && selectedOption !== q.answer) {
      btn.classList.add('wrong');
      let cue = document.createElement('span');
      cue.classList.add('visual-cue');
      cue.textContent = "✗";
      btn.appendChild(cue);
    }
  });
  
  userAnswers[quizOrder[currentQuestionIndex]] = { selected: selectedOption, correct: (selectedOption === q.answer), voided: false };
  if (selectedOption === q.answer) {
    score++;
    scoreSpan.textContent = score;
  }
  
  submitBtn.disabled = true;
  nextBtn.disabled = false;
  updateProgress();
});

// Void Question button handler
voidBtn.addEventListener('click', () => {
  userAnswers[quizOrder[currentQuestionIndex]] = { voided: true };
  document.querySelectorAll('#options-list button').forEach(btn => {
    btn.disabled = true;
  });
  submitBtn.disabled = true;
  nextBtn.disabled = false;
  updateProgress();
});

// Navigation management
function updateNavButtons() {
  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = (userAnswers[quizOrder[currentQuestionIndex]] === null);
}
prevBtn.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
});
nextBtn.addEventListener('click', () => {
  if (currentQuestionIndex < quizOrder.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    endQuiz();
  }
});

// Update progress counter and progress bar
function updateProgress() {
  let answered = userAnswers.filter((ans, idx) => ans !== null && !ans.voided && quizOrder.includes(idx)).length;
  let total = quizOrder.length;
  progressText.textContent = answered + " / " + total + " Questions Completed";
  progressBar.style.width = ((answered / total) * 100) + "%";
}

// End quiz: show final score and percentage
function endQuiz() {
  stopTimer();
  document.getElementById('quiz-container').style.display = "none";
  resultsDiv.style.display = "block";
  let validCount = userAnswers.filter(ans => ans !== null && !ans.voided).length;
  let percentage = validCount > 0 ? Math.round((score / validCount) * 100) : 0;
  finalScoreSpan.textContent = score + " out of " + validCount;
  finalPercentage.textContent = "Percentage: " + percentage + "%";
}

// Restart quiz: reset state and return to home page
restartBtn.addEventListener('click', () => {
  score = 0;
  scoreSpan.textContent = score;
  currentQuestionIndex = 0;
  resultsDiv.style.display = "none";
  document.getElementById('quiz-container').style.display = "block";
  stopTimer();
  homeDiv.style.display = "block";
  quizPageDiv.style.display = "none";
});
