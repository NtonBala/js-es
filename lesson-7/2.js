/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение
const collect = function (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array');
  }

  return arr.reduce(function (sum, el) {
    if (typeof el !== 'number' && !Array.isArray(el)) {
      throw new Error('Elements and nested elements must be either a number or an array');
    }

    return sum + (Array.isArray(el) ? collect(el) : el);
  }, 0);
};

try {
  const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
  console.log(collect(array1)); // 12

  const array2 = [[[[[1, 2]]]]];
  console.log(collect(array2)); // 3

  const array3 = [[[[[1, 2]]], 2], 1];
  console.log(collect(array3)); // 6

  const array4 = [[[[[]]]]];
  console.log(collect(array4)); // 0

  const array5 = [[[[[], 3]]]];
  console.log(collect(array5)); // 3
} catch(err) {
  console.error(`${err.name}: ${err.message}`);
}

exports.collect = collect;
