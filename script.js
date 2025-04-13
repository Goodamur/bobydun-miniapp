
function startApp() {
  const tg = window.Telegram.WebApp;
  tg.MainButton.text = "Продолжить";
  tg.MainButton.show();
  tg.MainButton.onClick(() => {
    tg.close(); // можно заменить на переход к следующему экрану
  });
}
