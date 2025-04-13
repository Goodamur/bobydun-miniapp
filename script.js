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
    text: "Я твой гид\nи помошник по крипте",
    position: "dialog-bb"
  },
  {   
    text: "Я помогу тебе\nпонять крипту\nлегко и интересно.",
    position: "dialog-bb"
  },
  {  
    text:"Ты готов зайти\nко мне в гости?\nЕсли да, то нажимай\nкнопку «Поехали!» 🚀"
    position: "dialog-bb"
  },      
];

function nextStage() {
  index++;
  if (index < dialogues.length) {
    renderDialogue(index);
  }
}

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
