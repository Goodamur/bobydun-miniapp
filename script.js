const tg = window.Telegram.WebApp;
tg.expand();

const dialogues = [
  {
    text: "Привет!\nРад тебя видеть.",
    position: "dialog-bb"
  },
  {
    text: "Меня зовут\nBob Dun.\nМожно просто Boby 😉",
    position: "dialog-bb"
  },
  {
    text: "Я твой гид\nи помощник по крипте",
    position: "dialog-bb"
  },
  {
    text: "Я помогу тебе\nпонять крипту\nлегко и интересно.",
    position: "dialog-bb"
  },
  {
    text: "Ты готов зайти\nко мне в гости?\nЕсли да, то нажимай\nкнопку «Поехали!» 🚀",
    position: "dialog-bb"
  }
];

let index = 0;
const textElement = document.getElementById("animatedText");
const nextButton = document.getElementById("nextButton");

function renderDialogue(index) {
  const current = dialogues[index];
  textElement.innerText = current.text;

  if (index === dialogues.length - 1) {
    nextButton.style.display = "inline-block";
    nextButton.onclick = () => {
      window.location.href = "https://t.me/BobydunBot";
    };
  } else {
    nextButton.style.display = "none";
  }
}

function nextStage() {
  index++;
  if (index < dialogues.length) {
    renderDialogue(index);
  }
}

window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("app").style.display = "flex";
    renderDialogue(index);
  }, 3000);
};
