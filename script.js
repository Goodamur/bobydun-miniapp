const tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.text = "Поехали";
tg.MainButton.show();
tg.MainButton.onClick(() => {
  startGame();
});

const text = `Привет! Рад видеть тебя здесь.

Меня зовут BobyDun, но можно просто Boby😉 Я тут для того, чтобы быть твоим помощником и гидом в мире криптовалют.
Со мной ты научишься безопасно инвестировать и торговать😎

Тыцни кнопку "Поехали" ⬇️, если готов, и погнали😁`;

let index = 0;
const speed = 40;
const animatedText = document.getElementById("animatedText");

function typeWriter() {
  if (index < text.length) {
    animatedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = () => {
  typeWriter();
};

function startGame() {
  alert("Запускаем курс! 🚀 (сюда пойдет логика следующего шага)");
}
