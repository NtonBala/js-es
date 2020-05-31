/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 * 
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение
const isPositive = function (n) {
  if (typeof n !== 'number' || isNaN(n) || n <= Number.MIN_SAFE_INTEGER || n >= Number.MAX_SAFE_INTEGER) {
    throw new Error('False argument, must be a number');
  }

  const result = n >= 0 ? true : false;

  return result;
};

console.log(isPositive(-3)); // false
console.log(isPositive(3)); // true

exports.isPositive = isPositive;
