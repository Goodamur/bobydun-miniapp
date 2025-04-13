
function typeText(elementId, text, callback) {
  const el = document.getElementById(elementId);
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 40);
    } else if (callback) {
      callback();
    }
  }
  type();
}

window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
    typeText("animatedText", "Привет! Рад видеть тебя здесь.\nМеня зовут Boby Dun, но можно просто Boby.\nЯ тут для того, что бы быть твоим помощником и гидом в мире криптовалют.\nСо мной ты научишься, безопасно, инвестировать и торговать\nТыцни кнопку \"Поехали\", если готов, и погнали!!");
  }, 4000);
};

function nextStep() {
  document.getElementById("app").classList.add("hidden");
  document.getElementById("infoScreen").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("infoScreen").classList.add("hidden");
    document.getElementById("dialog2").classList.remove("hidden");
    typeText("animatedText2", "КРУТО! Ты молодец💥\nРад, что ты готов к исследованиям.\nА сейчас я задам тебе пару вопросов, чтобы понять твои уровень.\nТы, главное, отвечай честно, для того, что бы я мог подготовить, для тебя, правильную программу.\nВсего будет несколько тестовых вопросов, которые я придумал для тебя.\nРасслабься и не бойся ошибаться.");
  }, 4000);
}

function startTest() {
  alert("Здесь будет переход к первому тесту");
}
