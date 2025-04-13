const splash = document.getElementById('splash-screen');
const dialogue = document.getElementById('dialogue-scene');
const testScene = document.getElementById('test-scene');
const resultScene = document.getElementById('result-scene');
const courseScene = document.getElementById('course-scene');
const menuScene = document.getElementById('menu-scene');

const bubble = document.getElementById('bubble');
const nextBtn = document.getElementById('next-btn');
const startBtn = document.getElementById('start-btn');

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const resultText = document.getElementById('result-text');
const currentCourseEl = document.getElementById('current-course');
const menuList = document.querySelector('#menu-scene ul');

let dialogueIndex = 0;
let totalScore = 0;
let currentQuestion = 0;

const dialogues = [
  "Привет! Я — BobyDun!",
  "Ты попал в мир крипты.",
  "Я помогу тебе понять, что тут происходит.",
  "Готов пройти небольшой тест?",
];

// Темы для каждого уровня
const courseTopics = {
  "Базовый": ["Введение в криптовалюту", "Как создать кошелек", "Основы безопасности"],
  "Средний": ["Продвинутые криптокошельки", "Работа с биржами", "Торговые стратегии"],
  "Продвинутый": ["Программирование смарт-контрактов", "DeFi и доходное фермерство", "Анализ рынка"]
};

// Восстановление состояния при загрузке
window.onload = () => {
  const savedState = JSON.parse(localStorage.getItem('appState'));
  if (savedState) {
    restoreState(savedState);
  } else {
    setTimeout(() => {
      splash.classList.add('hidden');
      dialogue.classList.remove('hidden');
      showDialogue();
    }, 4000);
  }
};

// Сохранение текущей сцены
function saveState() {
  const appState = {
    currentScene: document.querySelector('.scene.active').id,
    totalScore,
    currentQuestion,
    chosenCourse: localStorage.getItem('chosenCourse') || null,
    progress: JSON.parse(localStorage.getItem('progress')) || {}
  };
  localStorage.setItem('appState', JSON.stringify(appState));
}

// Восстановление состояния
function restoreState(state) {
  switchScene(state.currentScene);
  totalScore = state.totalScore || 0;
  currentQuestion = state.currentQuestion || 0;

  if (state.currentScene === 'test-scene') {
    showQuestion();
  } else if (state.currentScene === 'menu-scene' && state.chosenCourse) {
    loadMenu(state.chosenCourse);
  }
}

function showDialogue() {
  bubble.innerText = dialogues[dialogueIndex];
  nextBtn.style.display = dialogueIndex < dialogues.length - 1 ? 'block' : 'none';
  startBtn.classList.toggle('hidden', dialogueIndex < dialogues.length - 1);
}

nextBtn.addEventListener('click', () => {
  dialogueIndex++;
  showDialogue();
});

startBtn.addEventListener('click', () => {
  dialogue.classList.add('hidden');
  testScene.classList.remove('hidden');
  showQuestion();
  saveState();
});

function showQuestion() {
  if (currentQuestion >= testQuestions.length) return showResult();

  const q = testQuestions[currentQuestion];
  questionContainer.innerText = q.question;
  optionsContainer.innerHTML = '';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'main-button';
    btn.innerText = opt.text;
    btn.onclick = () => {
      totalScore += opt.score;
      currentQuestion++;
      showQuestion();
      saveState();
    };
    optionsContainer.appendChild(btn);
  });
}

function showResult() {
  testScene.classList.add('hidden');
  resultScene.classList.remove('hidden');

  let msg = '';
  if (totalScore < 5) msg = "Ты новичок! Я помогу тебе со старта.";
  else if (totalScore < 10) msg = "Уже неплохо, ты кое-что знаешь.";
  else msg = "Ты ветеран крипты! Но уверен, что найдёшь, чему удивиться.";

  resultText.innerText = msg;
  saveState();
}

document.getElementById('choose-course-btn').addEventListener('click', () => {
  resultScene.classList.add('hidden');
  courseScene.classList.remove('hidden');
  saveState();
});

document.querySelectorAll('[data-course]').forEach(button => {
  button.addEventListener('click', () => {
    const chosenCourse = button.dataset.course;
    localStorage.setItem('chosenCourse', chosenCourse);
    loadMenu(chosenCourse);
    saveState();
  });
});

function loadMenu(course) {
  courseScene.classList.add('hidden');
  menuScene.classList.remove('hidden');
  currentCourseEl.innerText = course;

  // Очистить и заполнить список тем
  menuList.innerHTML = '';
  const progress = JSON.parse(localStorage.getItem('progress')) || {};

  courseTopics[course].forEach((topic, index) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'main-button';
    btn.innerText = topic;

    // Отображение прогресса
    const completed = progress[topic] || false;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;
    checkbox.addEventListener('change', () => {
      progress[topic] = checkbox.checked;
      localStorage.setItem('progress', JSON.stringify(progress));
      saveState();
    });

    li.appendChild(checkbox);
    li.appendChild(btn);
    menuList.appendChild(li);
  });
}

function switchScene(nextScene) {
  document.querySelectorAll('.scene').forEach(scene => scene.classList.remove('active'));
  document.getElementById(nextScene).classList.add('active');
  saveState();
}