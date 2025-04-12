function startGame() {
  const appDiv = document.querySelector('.app');
  appDiv.innerHTML = `
    <h2>Уровень 1</h2>
    <p>Вопрос: Что такое блокчейн?</p>
    <button onclick="alert('Правильно!')">Цепочка блоков с данными</button>
    <button onclick="alert('Неправильно')">Обычный сайт</button>
  `;
}
