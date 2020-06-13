/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
const createArray = function (val, length) {
  if (typeof val !== 'number' && typeof val !== 'string' && typeof val !== 'object') {
    throw new Error('First argument must be either of number or of string, or of object type');
  }

  if (typeof length !== 'number') {
    throw new Error('Second argument must a positive integer');
  }

  return new Array(length).fill(val);
};

try {
  const result = createArray('x', 5);

  console.log(result); // [ x, x, x, x, x ]
} catch (err) {
  console.error(`${err.name}: ${err.message}`);
}

exports.createArray = createArray;
