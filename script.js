const tg = window.Telegram.WebApp;
tg.expand();

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
const skipButton = document.getElementById("skipButton");

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
  }, 40);
}

function nextStage() {
  index++;
  if (index < messages.length) {
    showText(messages[index]);

    if (index === 4) {
      nextButton.innerText = "Поехали";
      nextButton.style.display = "inline-block";
      skipButton.style.display = "none";
    }

    if (index === messages.length - 1) {
      nextButton.innerText = "Пройти тест";
      nextButton.style.display = "inline-block";
      skipButton.style.display = "none";
      nextButton.onclick = () => window.location.href = "https://t.me/BobydunBot";
    }
  }
}

window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("app").style.display = "flex";
    showText(messages[index]);
    skipButton.style.display = "inline-block";
    nextButton.style.display = "none";
  }, 4000);
}
