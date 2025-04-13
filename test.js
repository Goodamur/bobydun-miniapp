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
      text: "Какая цель у риск-менеджмента?",
      answers: [
        { text: "Управлять убытками", score: 2 },
        { text: "Увеличить доходность", score: 0 },
        { text: "Игнорировать риски", score: 0 },
        { text: "Быстро разбогатеть", score: 0 }
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
      btn.className = 'answer';
      btn.onclick = () => {
        score += a.score;
        index++;
        if (index >= questions.length) {
          showResult();
        } else {
          showQuestion();
        }
      };
      answers.appendChild(btn);
    });
  }

  function showResult() {
    document.getElementById('question-block').style.display = 'none';
    document.getElementById('result-block').style.display = 'block';
    document.getElementById('result-text').textContent = `Ты набрал ${score} баллов`;
    document.getElementById('level-text').textContent =
      score < 3 ? "Новичок" : score < 4 ? "Осознанный" : "Гений";
  }

  showQuestion();
});
