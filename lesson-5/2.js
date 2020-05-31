/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение
const f = function () {
  let sum = 0;

  for (const n of arguments) {
    if (typeof n !== 'number' || isNaN(n) || n <= Number.MIN_SAFE_INTEGER || n >= Number.MAX_SAFE_INTEGER) {
      throw new Error('Each argument must be a number');
    }

    sum += n;
  }

  return sum;
};

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

exports.f = f;
