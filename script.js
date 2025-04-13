
const tg = window.Telegram.WebApp;
tg.expand();

window.onload = function() {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("app").style.display = "flex";
    document.getElementById("bg-music").play();
    animateText("Привет! Рад видеть тебя здесь. Меня зовут Boby Dun, но можно просто Boby. Я тут для того, чтобы быть твоим помощником и гидом в мире криптовалют. Со мной ты научишься, безопасно, инвестировать и торговать. Тыцни кнопку 'Поехали', если готов, и погнали!!");
  }, 4000);
};

function animateText(text) {
  let element = document.getElementById("animatedText");
  element.innerHTML = '';
  let i = 0;
  let timer = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(timer);
  }, 50);
}

function startGame() {
  animateText("КРУТО! Ты молодец💥 Рад, что ты готов к исследованиям. А сейчас я задам тебе пару вопросов, чтобы понять твой уровень. Ты, главное, отвечай честно, для того, чтобы я мог подготовить для тебя правильную программу. Всего будет несколько тестовых вопросов, которые я придумал для тебя. Расслабься и не бойся ошибаться.");
  document.querySelector("button").innerText = "Пройти Тест";
  document.querySelector("button").onclick = () => window.location.href = 'test.html';
}
