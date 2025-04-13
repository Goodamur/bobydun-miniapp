const tg = window.Telegram.WebApp;
tg.expand();

const dialogues = [
  "Привет! Рад видеть тебя здесь.",
  "Меня зовут BobyDun, но можно просто Boby 😉",
  "Я помогу тебе понять мир криптовалют легко и интересно!",
  "Готов? Тогда жми «Поехали» 🚀"
];

let index = 0;
const container = document.getElementById("dialogue-container");

function renderDialogue(text, showFinal = false) {
  container.innerHTML = `
    <div class="dialogue-bubble">
      <p>${text}</p>
    </div>
    <button onclick="nextDialogue()" class="next-button">${showFinal ? 'Поехали' : 'Далее'}</button>
  `;
  if (showFinal) {
    document.querySelector(".next-button").onclick = () => window.location.href = "https://t.me/BobydunBot";
  }
}

function nextDialogue() {
  index++;
  if (index < dialogues.length) {
    renderDialogue(dialogues[index], index === dialogues.length - 1);
  }
}

window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("app").style.display = "flex";
    renderDialogue(dialogues[index]);
  }, 4000);
}
