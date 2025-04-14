const tg = window.Telegram.WebApp;
tg.ready();

const messages = [
  "Привет!\nРад видеть тебя здесь.",
  "Меня зовут\nBobyDun.\nМожно просто Boby 😉",
  "Я буду твоим гидом\nв мире криптовалют.",
  "Со мной ты научишься\nне терять деньги, а зарабатывать 😎",
  "Тыцни кнопку\n«Поехали», если готов — и\nпогнали 🚀"
];

let index = 0;
const textElement = document.getElementById("animatedText");
const nextButton = document.getElementById("nextButton");

function showText(text, showButton = false) {
  textElement.innerText = text;
  nextButton.style.display = showButton ? "block" : "none";
}

function nextStage() {
  index++;
  if (index < messages.length) {
    const isLast = index === messages.length - 1;
    showText(messages[index], isLast);
    if (isLast) {
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
    nextButton.style.display = "block";
    nextButton.onclick = nextStage;
  }, 3000);
};
