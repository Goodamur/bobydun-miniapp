const tg = window.Telegram.WebApp;
tg.expand();

const messages = [
  "Привет!\nРад видеть тебя здесь.",
  "Меня зовут\nBobyDun.\nМожно просто Boby 😉",
  "Я помогу тебе\nпонять крипту\nлегко и интересно.",
  "Готов?\nЖми кнопку\n«Поехали!» 🚀"
];

let index = 0;
const textElement = document.getElementById("animatedText");
const nextButton = document.getElementById("nextButton");

function renderMessage(text, isFinal = false) {
  textElement.innerText = text;
  nextButton.style.display = isFinal ? "inline-block" : "none";

  if (isFinal) {
    nextButton.onclick = () => {
      window.location.href = "https://t.me/BobydunBot"; // или путь к тесту
    };
  }
}

function nextStage() {
  index++;
  if (index < messages.length) {
    renderMessage(messages[index], index === messages.length - 1);
  }
}

window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("app").style.display = "flex";
    renderMessage(messages[index], false);
  }, 3000);
};
