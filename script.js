const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: 1
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
    correctAnswer: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('question').textContent = currentQuestion.question;

  const optionsList = document.getElementById('answer-options');
  optionsList.innerHTML = '';

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement('li');
    li.textContent = option;
    li.addEventListener('click', () => selectAnswer(index));
    optionsList.appendChild(li);
  });

  document.getElementById('result-container').style.display = 'none';
  document.getElementById('submit-btn').style.display = 'block';
}

let selectedAnswer = null;

function selectAnswer(index) {
  selectedAnswer = index;
}

document.getElementById('submit-btn').addEventListener('click', () => {
  if (selectedAnswer === null) {
    alert('Please select an answer!');
    return;
  }

  const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;
  if (selectedAnswer === correctAnswerIndex) {
    score++;
  }

  document.getElementById('result-container').style.display = 'block';
  document.getElementById('submit-btn').style.display = 'none';
  document.getElementById('score').textContent = `Your score is: ${score}`;
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert('Quiz Over! Your final score is: ' + score);
    // Optionally, restart the quiz
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
  }
});

loadQuestion();