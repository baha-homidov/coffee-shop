const emulator = {
  StartCashin: function (cb) {
    // Эта функция в приложении не используется
    console.log("Приемник наличных активирован. Готов к приему денег.");
    const handleKeydown = (event) => {
      switch (event.key) {
        case '1':
          cb(1); // 1 рубль
          break;
        case '5':
          cb(5); // 5 рублей
          break;
        case '0':
          cb(10); // 10 рублей
          break;
        // Добавьте другие случаи, если необходимо
        default:
          break;
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return handleKeydown; // Возвращаем обработчик для последующего удаления
  },

  StopCashin: function (handleKeydown) {
    console.log("Приемник наличных деактивирован.");
    document.removeEventListener('keydown', handleKeydown);
  },

  BankCardPurchase: function (amount, cb, display_cb) {
    console.log(`Покупка по банковской карте на сумму: ${amount}`);
    display_cb('Вставьте карту');
    setTimeout(() => display_cb('Обработка карты...'), 1000);
    setTimeout(() => display_cb('Соединение с банком...'), 2000);

    const handleKeydown = (event) => {
      if (event.key === 's') {
        display_cb('Транзакция успешна');
        cb(true);
      } else if (event.key === 'f') {
        display_cb('Транзакция неудачна');
        cb(false);
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return handleKeydown; // Возвращаем обработчик для последующего удаления
  },

  BankCardCancel: function () {
    console.log("Операция с банковской картой отменена.");
  },

  Vend: function (product_idx, cb) {
    console.log(`Выдача напитка с индексом: ${product_idx}`);
    const handleKeydown = (event) => {
      if (event.key === 'v') {
        console.log("Выдача успешна.");
        cb(true);
      } else if (event.key === 'x') {
        console.log("Выдача неудачна.");
        cb(false);
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return handleKeydown; // Возвращаем обработчик для последующего удаления
  }
};

export default emulator;
