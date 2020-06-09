/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3];

// Решение
const forEach = function (arr, cb) {
    "use strict";

    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }

    if (typeof cb !== 'function') {
        throw new Error('Second argument must be callback function');
    }

    for (const key of Object.keys(arr) ) {
        const i = Number(key);

        if (!Number.isInteger(i) || i < 0) {
            continue;
        }

        cb(arr[i], i, arr);
    }
};

try {
    const result = forEach(array, (element, index, arrayRef) => {
        console.log(`${index}:`, element, arrayRef);
    });

    console.log(result); // undefined
} catch (err) {
    console.error(`${err.name}: ${err.message}`);
}

exports.forEach = forEach;
