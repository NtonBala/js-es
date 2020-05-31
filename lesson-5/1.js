/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение
const f = function (n) {
  if (typeof n !== 'number' || isNaN(n) || n <= Number.MIN_SAFE_INTEGER || n >= Number.MAX_SAFE_INTEGER) {
    throw new Error('False argument, must be a number');
  }

  const result = Math.pow(n, 3);

  return result;
};

console.log(f(2)); // 8

exports.f = f;
