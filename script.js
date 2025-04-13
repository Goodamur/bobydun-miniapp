const tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.text = "Продолжить";
tg.MainButton.show();

window.onload = function () {
  setTimeout(() => {
    document.getElementById("splash").classList.add("hidden");
    document.querySelector(".app").classList.remove("hidden");
    typeText("Привет! Рад видеть тебя здесь. Меня зовут BobyDun, но можно просто Boby. Я тут для того, что бы быть твоим помощником и гидом в мире криптовалют. Со мной ты научишься, безопасно, инвестировать и торговать. Тыцни кнопку 'Поехали', если готов, и погнали!!");
  }, 5000);
};

function typeText(text) {
  const textElem = document.getElementById("animatedText");
  let index = 0;
  const interval = setInterval(() => {
    textElem.textContent += text[index];
    index++;
    if (index === text.length) clearInterval(interval);
  }, 40);
}

function startGame() {
  tg.MainButton.hide();
  alert("Тестовая сцена запускается...");
}
