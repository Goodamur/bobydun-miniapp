const tg = window.Telegram.WebApp;
tg.ready();

const messages = [
  "Привет! Рад видеть тебя здесь.",
  "Меня зовут BobyDun, но можно просто Boby 😉",
  "Я тут для того, чтобы быть твоим помощником и гидом в мире криптовалют.",
  "Со мной ты научишься безопасно инвестировать и торговать 😎",
  "Тыцни кнопку «Поехали», если готов — и погнали 🚀"
];

let index = 0;
const textElement = document.getElementById("animatedText");
const nextButton = document.getElementById("nextButton");
const bubble = document.getElementById("dialog-bubble");

function showText(text, callback) {
  textElement.innerText = text;
  if (callback) callback();
}

function nextStage() {
  index++;
  if (index < messages.length) {
    showText(messages[index]);
    if (index === messages.length - 1) {
      nextButton.innerText = "Пройти тест";
      nextButton.onclick = () => window.location.href = "test.html";
    }
  }
}

window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("app").style.display = "flex";
    showText(messages[index]);
  }, 3000); // загрузка 3 секунды
};
