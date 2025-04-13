document.addEventListener('DOMContentLoaded', function () {
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
      text: "Кто создатель Ethereum?",
      answers: [
        { text: "Виталик Бутерин", score: 2 },
        { text: "Илон Маск", score: 0 },
        { text: "Джонни Синс", score: 0 },
        { text: "CZ Binance", score: 1 }
      ]
    },
    {
      text: "Что помогает избежать слива депозита?",
      answers: [
        { text: "Стоп-лосс", score: 2 },
        { text: "Удача", score: 0 },
        { text: "Интуиция", score: 0 },
        { text: "Холд на всю", score: 1 }
      ]
    },
    {
      text: "Что такое FOMO?",
      answers: [
        { text: "Страх упустить выгоду", score: 2 },
        { text: "Новый альткоин", score: 0 },
        { text: "Тип блокчейна", score: 0 },
        { text: "Формула майнинга", score: 1 }
      ]
    },
    {
      text: "Когда лучше покупать?",
      answers: [
        { text: "На панике", score: 2 },
        { text: "Когда растёт", score: 0 },
        { text: "Когда твитнул Маск", score: 0 },
        { text: "На хаях", score: 0 }
      ]
    },
    {
      text: "Что главное в трейдинге?",
      answers: [
        { text: "Дисциплина", score: 2 },
        { text: "Адреналин", score: 0 },
        { text: "Удача", score: 0 },
        { text: "Мемы", score: 1 }
      ]
    },
    {
      text: "Что такое холодное хранение?",
      answers: [
        { text: "Оффлайн-кошелёк", score: 2 },
        { text: "Биржа", score: 0 },
        { text: "Трейдинг в шортах", score: 0 },
        { text: "Хранение на YouTube", score: 0 }
      ]
    },
    {
      text: "Что НЕ является биржей?",
      answers: [
        { text: "Binance", score: 0 },
        { text: "KuCoin", score: 0 },
        { text: "PancakeSwap", score: 0 },
        { text: "CryptoShaurma", score: 2 }
      ]
    },
    {
      text: "Сколько процентов от депозита стоит рисковать в одной сделке?",
      answers: [
        { text: "1-2%", score: 2 },
        { text: "10-20%", score: 0 },
        { text: "50%", score: 0 },
        { text: "Всё сразу", score: 0 }
      ]
    },
    {
      text: "Сколько ты уже в крипте?",
      answers: [
        { text: "Только начал", score: 0 },
        { text: "До 6 мес", score: 1 },
        { text: "1-2 года", score: 2 },
        { text: "Больше 2 лет", score: 3 }
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
