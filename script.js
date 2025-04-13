
const tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.text = "Продолжить";
tg.MainButton.show();
tg.MainButton.onClick(() => {
  document.querySelector('.app').style.display = "none";
  document.getElementById('question-screen').style.display = "block";
});

let fullText = `Привет! Рад видеть тебя здесь.
Меня зовут Boby Dun, но можно просто Boby.
Я тут для того, что бы быть твоим помощником и гидом в мире криптовалют.
Со мной ты научишься, безопасно, инвестировать и торговать.
Тыцни кнопку "Поехали", если готов, и погнали!!`;
let index = 0;

function typeText() {
  const animatedText = document.getElementById("animatedText");
  if (index < fullText.length) {
    animatedText.textContent += fullText.charAt(index);
    index++;
    setTimeout(typeText, 40);
  }
}

window.onload = function() {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.querySelector(".app").style.display = "block";
    typeText();
  }, 4000);
};

function showInfo() {
  document.querySelector(".app").style.display = "none";
  document.getElementById("info-screen").style.display = "block";
  setTimeout(() => {
    document.getElementById("info-screen").style.display = "none";
    document.getElementById("question-screen").style.display = "block";
  }, 4000);
}
