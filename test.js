document.addEventListener('DOMContentLoaded', function() {
  const questions = [
    {
      text: "Что такое криптовалюта?",
      answers: [
        { text: "Цифровая валюта", score: 2 },
        { text: "Бумажные деньги", score: 0 },
        { text: "Подарочная карта", score: 0 },
        { text: "Ценные бумаги", score: 1 }
      ]
    },
    {
      text: "Что такое блокчейн?",
      answers: [
        { text: "Цепочка данных", score: 2 },
        { text: "Сеть пользователей", score: 1 },
        { text: "Программа для торговли", score: 0 },
        { text: "Тип компьютера", score: 0 }
      ]
    }
  ];

  let index = 0;
  let score = 0;

  function showQuestion() {
    const q = questions[index];
    document.getElementById('question-text').textContent = q.text;
    const answers = document.getElementById('answers');
    answers.innerHTML = '';
    q.answers.forEach(a => {
      const btn = document.createElement('button');
      btn.textContent = a.text;
      btn.className = 'button';
      btn.onclick = () => {
        score += a.score;
        index++;
        index >= questions.length ? showResult() : showQuestion();
      };
      answers.appendChild(btn);
    });
  }

  function showResult() {
    document.getElementById('question-block').style.display = 'none';
    document.getElementById('result-block').style.display = 'block';
    document.getElementById('result-text').textContent = `Ты набрал ${score} баллов`;
    document.getElementById('level-text').textContent =
      score < 4 ? "Новичок" : score < 8 ? "Осознанный" : "Гений крипты";
  }

  showQuestion();
});
