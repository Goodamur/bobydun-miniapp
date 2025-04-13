const tg = window.Telegram.WebApp;
tg.expand();

const dialogues = [
  "Привет! Рад видеть тебя здесь.",
  "Меня зовут BobyDun, но можно просто Boby 😉",
  "Я помогу тебе понять мир криптовалют легко и интересно!",
  "Готов? Тогда жми «Далее»!"
];

let index = 0;
const container = document.getElementById("dialogue-container");

function renderDialogue(text) {
  container.innerHTML = `
    <div class="dialogue-bubble">
      <p>${text}</p>
      <button onclick="nextDialog()">Далее</button>
    </div>
  `;
}

function nextDialog() {
  index++;
  if (index < dialogues.length) {
    renderDialogue(dialogues[index]);
  } else {
    window.location.href = "https://t.me/BobydunBot";
  }
}

window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("app").style.display = "flex";
    renderDialogue(dialogues[index]);
  }, 4000);
}
