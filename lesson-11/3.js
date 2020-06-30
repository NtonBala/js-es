/**
 * Задача 3.
 *
 * Улучшите функцию createFibonacciGenerator() из предыдущего примера.
 *
 * Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
 * - print — возвращает число из последовательности Фибоначчи;
 * - reset — обнуляет последовательность и ничего не возвращает.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение
'use strict';

const createFibonacciGenerator = () => {
  let a = null;
  let b = null;

  const print = () => {
    if (!a) {
      a = 1;

      return a;
    }

    if (!b) {
      b = 1;

      return b;
    }

    const c = a + b;

    a = b;
    b = c;

    return b;
  };

  const reset = () => {
    a = null;
    b = null;
  };

  return { print, reset };
};

const generator1 = createFibonacciGenerator();

console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.reset()); // undefined
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2

const generator2 = createFibonacciGenerator();

console.log(generator2.print()); // 1
console.log(generator2.print()); // 1
console.log(generator2.print()); // 2

exports.createFibonacciGenerator = createFibonacciGenerator;
