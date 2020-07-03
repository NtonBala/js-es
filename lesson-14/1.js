/**
 * Задача 1.
 *
 * Дан базовый класс робота-уборщика.
 *
 * Добавьте роботу функционал употребления энергии:
 * - при начале уборки уровень энергии должен уменьшиться;
 * - в расчёте использовать внутренний коэффициент ENERGY_CONSUMPTION.
 *
 * Затем добавьте роботу публичный метод stop() для остановки процесса уборки.
 * Eсли уборка остановлена раньше времени завершения,
 * onReady сработать не должен, а также нужно вывести другое сообщение.
 *
 * Условия:
 * - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять;
 * - использовать функцию clearTimeout;
 * - идентификатор таймера нужно хранить в приватной переменной конструктора.
 */
'use strict';

function CleanerRobot(
  initialEnergy = 0 /* Изначальный заряд батареи робота */,
  cleaningSquare /* Площадь для уборки в метрах. */,
) {
  let energy = initialEnergy;
  let timerId = 0;
  let startTime = null;
  const ENERGY_CONSUMPTION = 1; /* Расход энергии: 1% батареи на 1 час работы. */
  const CLEANING_SPEED = 10; /* Скорость уборки: 10 квадратных метров в час. */
  const getCleaningTime = () => cleaningSquare / CLEANING_SPEED;
  const onReady = () =>
    console.log(`Уборка завершена. Осталось заряда батареи: ${energy}.`);
  const setEnergy = (time) => {
    energy = parseFloat((energy - time * ENERGY_CONSUMPTION).toFixed(2));
  };

  this.clean = () => {
      const cleaningTime = getCleaningTime();

      console.log(
          `Начинаю процесс уборки. Время уборки: ${cleaningTime} часов.`,
      );

      startTime = new Date();
      /* Для удобства время уборки сокращено до формата 1 час = 1 секунда */
      timerId  = setTimeout(() => {
        setEnergy(cleaningTime);
        onReady();
      }, cleaningTime * 1000);
  };

  // Решение
  this.stop = () => {
    if (!timerId) {
      return;
    }
    
    const delta = new Date().getTime() - startTime.getTime();

    if (delta < getCleaningTime() * 1000) {
      clearTimeout(timerId);
      timerId = 0;
      startTime = null;

      setEnergy(delta / 1000);
      console.log(`Уборка завершена досрочно. Осталось заряда батареи: ${energy}.`);
    }
  };
}

const cleanerRobot = new CleanerRobot(50, 45);
cleanerRobot.clean(); /* Начинаю процесс уборки. Время уборки: 4.5 часов. */

/* Спустя 4.5 секунды: Уборка завершена. Осталось заряда батареи: 45.5. */

setTimeout(() => {
    cleanerRobot.stop(); /* Спустя 1 секунду: Уборка завершена досрочно. Осталось заряда батареи: 45.5. */
}, 1000);

exports.CleanerRobot = CleanerRobot;
