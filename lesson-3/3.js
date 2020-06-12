/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение
function truncate (string, maxLength) {
  if (typeof string !== 'string') {
    throw new Error('First argument is mandatory and must be of type \'string\'');
  }

  if (maxLength && typeof maxLength !== 'number') {
    throw new Error('Second argument must be of type \'number\'');
  }

  let result = string;

  if (maxLength >= 3 && string.length > maxLength) {
    result = `${string.slice(0, maxLength - 3)}...`;
  }

  return result;
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21)); // 'Вот, что мне хотел...'

exports.truncate = truncate;
