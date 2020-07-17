/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение
function upperCaseFirst(str) {
  if (!str && str !== '' || typeof str !== 'string') {
    throw new Error('First argument is mandatory and must be of type \'string\'');
  }

  const firstCharUpperCased = str.charAt(0).toUpperCase();
  const rest = str.slice(1);

  return `${firstCharUpperCased}${rest}`;
}

// console.log(upperCaseFirst('pitter')); // Pitter
// console.log(upperCaseFirst('')); // ''

exports.upperCaseFirst = upperCaseFirst;
