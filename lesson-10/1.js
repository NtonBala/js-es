/**
 * Задача 1.
 *
 * Напишите имплементацию функции Function.prototype.bind().
 *
 * Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
 * и возвращать новую, привязанную версию целевой функции.
 *
 * Функция bind() должна обладать следующими параметрами:
 * - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
 * - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
 * - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.
 *
 * Генерировать ошибки если:
 * - Первый параметр не является типом function;
 * - Второй параметр не является типом object;
 * - Второй параметр является массивом.
 *
 * Условия:
 * - Использовать встроенную функцию Function.prototype.bind() запрещено.
 */

// Решение
"use strict";

const bind = (cb, context, ...args) => {
  if (typeof cb !== 'function') {
    throw new Error(`First argument must be a function: in function "${bind.name}"`);
  }

  if (typeof context !== 'object' || Array.isArray(context)) {
    throw new Error(`Second argument must be an object: in function "${bind.name}"`);
  }

  return () => {
    return cb.apply(context, args);
  };
};

function getName(greeting, message) {
  return `${greeting} ${message} ${this.name}.`;
}

try {
  const user = { name: 'Walter', getName };
  const oliver = { name: 'Oliver' };

  const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

  console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
  console.log(boundedGetName()); // Hello! I am Oliver.
} catch (err) {
  console.error(err);
}

exports.bind = bind;
