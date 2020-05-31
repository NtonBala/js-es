/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает число от 1 до 7 в качестве аргумента.
 * Функция возвращает соответствующий день недели на русском языке в следующем формате:
 * 
 * 1 — Воскресенье
 * 2 — Понедельник
 * 3 — Вторник
 * 4 — Среда
 * 5 — Четверг
 * 6 — Пятница
 * 7 — Суббота
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента было предано число вне промежутка 1-7.
 */

// Решение
const f = function (n) {
  if (typeof n !== 'number' || isNaN(n) || n <= Number.MIN_SAFE_INTEGER || n >= Number.MAX_SAFE_INTEGER) {
    throw new Error('False argument, must be a number');
  }

  if (!(n >= 1 && n <= 7)) {
    throw new Error('Number must be in the range of 1 to 7');
  }

  const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  return weekDay[n - 1];
};

console.log(f(1)); // Воскресенье
console.log(f(4)); // Среда

exports.f = f;
