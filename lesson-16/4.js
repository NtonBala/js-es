/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 * 
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение
"use strict";

const { checkForString } = require('../helpers/validate');
const { upperCaseFirst } = require('../lesson-3/1');

class Stringer {
  reverse (str) {
    checkForString(str);

    return str.split('').reverse().join('');
  }

  uppercaseFirst (str) {
    return upperCaseFirst(str);
  }

  uppercaseAll (str) {
    checkForString(str);

    return str
      .split(' ')
      .map((s) => this.uppercaseFirst(s))
      .join(' ');
  }
}

try {
  const stringer = new Stringer();

  console.log(stringer.reverse('good morning!')); // !gninrom doog
  console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
  console.log(stringer.uppercaseAll('good morning!')); // Good Morning!
} catch (err) {
  console.error(err);
}

exports.Stringer = Stringer;
