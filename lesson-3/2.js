/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку example. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение
function checkSpam(source, example) {
  if (typeof source !== 'string') {
    throw new Error('First argument is mandatory and must be of type \'string\'');
  }

  if (typeof example !== 'string') {
    throw new Error('Second argument is mandatory and must be of type \'string\'');
  }

  const sourceLowerCased = source.toLowerCase();
  const exampleLowerCased = example.toLowerCase();

  const exampleIndex = sourceLowerCased.indexOf(exampleLowerCased);

  return exampleIndex > -1 ? true : false;
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true

exports.checkSpam = checkSpam;
