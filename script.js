const tg = window.Telegram.WebApp;
tg.expand();

const messages = [
  "Привет!\nЯ BobyDun — твой гид по криптомиру.",
  "Тут ты узнаешь всё от А до Я о крипте.",
  "Будет легко, интересно и даже весело!",
  "Готов начать путь в крипто-приключение?",
  "Тыцни кнопку «Поехали» и начнём!"
];

let index = 0;
const textElement = document.getElementById("dialogue-text");
const nextButton = document.getElementById("nextButton");

function updateDialogue(text, showButton = false) {
  textElement.innerText = text;
  nextButton.style.display = showButton ? "inline-block" : "none";
}

function nextStage() {
  index++;
  if (index < messages.length) {
    updateDialogue(messages[index], index === messages.length - 1);
  } else {
    window.location.href = "test.html";
  }
}

window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("app").style.display = "flex";
    updateDialogue(messages[index]);
  }, 3000);

  nextButton.onclick = nextStage;
};
