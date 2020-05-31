/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение
const f = function (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array');
  }

  if (arr.length < 1) {
    throw new Error('Array must contain at least 1 element');
  }

  const printEl = function () {
    const el = arr.splice(0, 1)[0];
    
    console.log(el);

    if (arr.length >= 1) {
      printEl();
    }
  };

  printEl();
};

f([1, 2, 3]);
// 1
// 2
// 3

exports.f = f;
