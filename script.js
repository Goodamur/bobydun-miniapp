// Переменные для управления диалогами
const dialogues = [
  "Привет! Рад видеть тебя здесь.",
  "Меня зовут BobyDun, но можно просто Boby 😉",
  "Я твой гид в мире крипты. Вместе мы научимся безопасно инвестировать и торговать!",
  "Нажми кнопку, если готов, и поехали!" // Последняя реплика
];

let currentDialogueIndex = 0; // Текущий индекс диалога

// Элементы на странице
const dialogueElement = document.getElementById("animatedText");
const nextButton = document.getElementById("nextButton");
const startButton = document.getElementById("startButton");

// Функция для показа следующей реплики
function showNextDialogue() {
  if (currentDialogueIndex < dialogues.length - 1) {
    dialogueElement.innerHTML = ""; // Очищаем текст
    typeText(dialogues[currentDialogueIndex], "animatedText", 50, () => {
      nextButton.style.display = "block"; // Показываем кнопку «Далее»
    });
    currentDialogueIndex++;
  } else {
    // Если это последняя реплика
    nextButton.style.display = "none"; // Прячем кнопку «Далее»
    startButton.style.display = "block"; // Показываем кнопку «Поехали»
  }
}

// Скрываем все кнопки при старте
nextButton.style.display = "none";
startButton.style.display = "none";

// Событие на кнопку «Далее»
nextButton.addEventListener("click", () => {
  nextButton.style.display = "none"; // Прячем кнопку «Далее»
  showNextDialogue(); // Переход к следующей реплике
});

// Инициализация первого диалога
showNextDialogue();
