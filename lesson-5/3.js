/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение
const f = function (a, b ,c) {
  if (typeof a !== 'number' || isNaN(a) || a <= Number.MIN_SAFE_INTEGER || a >= Number.MAX_SAFE_INTEGER) {
    throw new Error('First argument must be a number');
  }

  if (typeof b !== 'number' || isNaN(b) || b <= Number.MIN_SAFE_INTEGER || b >= Number.MAX_SAFE_INTEGER) {
    throw new Error('Second argument must be a number');
  }

  if (typeof c !== 'number' || isNaN(c) || c <= Number.MIN_SAFE_INTEGER || c >= Number.MAX_SAFE_INTEGER) {
    throw new Error('Third argument must be a number');
  }

  const result = c === 0 ? 0 : (a - b) / c;

  return result;
};

console.log(f(9, 3, 2)); // 3

exports.f = f;
