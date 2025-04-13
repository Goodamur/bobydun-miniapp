// Сообщения для отображения
const messages = [
  "Привет! Рад видеть тебя здесь.",
  "Меня зовут BobyDun, но можно просто Boby 😉",
  "Я тут для того, чтобы быть твоим помощником и гидом в мире криптовалют.",
  "Со мной ты научишься безопасно инвестировать и торговать 😎",
  "Тыцни кнопку 'Поехали', если готов — и погнали 🚀",
  "КРУТО! Ты молодец 💥",
  "Рад, что ты готов к исследованиям!",
  "А сейчас я задам тебе пару вопросов, чтобы понять твой уровень.",
  "Всего будет несколько тестовых вопросов — не бойся ошибаться 😉",
  "Готов? Жми 'Пройти тест'!"
];

let index = 0;

const textElement = document.getElementById("animatedText");
const nextButton = document.getElementById("nextButton");

// Функция для показа текста с анимацией
function showText(text, callback) {
  let i = 0;
  textElement.innerHTML = '';
  const interval = setInterval(() => {
    textElement.innerHTML += text[i];
    i++;
    if (i === text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 50); // Скорость анимации
}

// Переход к следующему этапу
function nextStage() {
  index++;
  if (index < messages.length) {
    showText(messages[index]);
    if (index === messages.length - 1) {
      nextButton.innerText = "Пройти тест";
      nextButton.onclick = () => window.location.href = "test.html";
    }
  } else {
    nextButton.style.display = "none"; // Скрыть кнопку, если сообщений больше нет
  }
}

// Запуск приложения
window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("app").style.display = "flex";
    showText(messages[index]);
  }, 2000); // Уменьшено время ожидания
};

// Обработчик нажатия кнопки
nextButton.addEventListener("click", nextStage);
