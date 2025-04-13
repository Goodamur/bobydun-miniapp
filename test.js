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
    // Остальные вопросы...
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
      btn.className = 'answer';
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
      score < 8 ? "Новичок" : score < 16 ? "Осознанный" : "Гений крипты";
  }

  showQuestion();
});