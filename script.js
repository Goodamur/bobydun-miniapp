body {
  margin: 0;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  background: url('media/background.jpg') no-repeat center center fixed;
  background-size: cover;
  overflow: hidden;
  color: white;
}

/* Загрузочный экран */
.loading-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  font-size: 1.5em;
  color: white;
}

.logo {
  width: 150px;
  margin-bottom: 20px;
}

/* Основное приложение */
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
}

.character {
  width: 180px;
  margin-bottom: 20px;
  animation: float 3s ease-in-out infinite, blink 5s infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes blink {
  0%, 100%, 90% { opacity: 1; }
  91%, 92% { opacity: 0.3; }
}

.text-box {
  margin-top: 20px;
  font-size: 1.2em;
  text-shadow: 0 0 5px #000;
}

.button {
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 1.2em;
  border: none;
  border-radius: 10px;
  background-color: #ff9900;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #cc7a00;
}
