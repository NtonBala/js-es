/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 * 
 * Заметки:
 * - В решении вам понадобится использовать цикл с перебором массива.
 */

// Решение
const getDivisors = function (n) {
  if (typeof n !== 'number' || isNaN(n) || n <= Number.MIN_SAFE_INTEGER || n >= Number.MAX_SAFE_INTEGER) {
    throw new Error('False argument, must be a number');
  }

  if (n < 1) {
    throw new Error('Number must be greater than 1');
  }

  const divisors = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
};

console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]

exports.getDivisors = getDivisors;
