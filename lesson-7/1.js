/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
  false,
  'Привет.',
  2,
  'Здравствуй.',
  [],
  'Прощай.',
  {
      name: 'Уолтер',
      surname: 'Уайт',
  },
  'Приветствую.',
];

// Решение
const inspect = function (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array');
  }

  return arr
    .filter(function (el) {
      return typeof el === 'string';
    })
    .map(function (el) {
      return el.length;
    });
};

try {
  const result = inspect(array);

  console.log(result); // [ 7, 11, 7, 12 ]
} catch(err) {
  console.error(`${err.name}: ${err.message}`);
}

exports.inspect = inspect;
