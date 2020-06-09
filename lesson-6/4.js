/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 * 
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение
const some = function (arr, cb) {
    "use strict";

    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }

    if (typeof cb !== 'function') {
        throw new Error('Second argument must be callback function');
    }

    let isTrue = false;

    for (const key of Object.keys(arr)) {
        const i = Number(key);

        if (!Number.isInteger(i) || i < 0) {
            continue;
        }

        isTrue = Boolean(cb(arr[i], i, arr));

        if (isTrue) {
            return isTrue;
        }
    }

    return isTrue;
}

try {
    const result = some(array, (element, index, arrayRef) => {
        console.log(`${index}:`, element, arrayRef);
    
        return typeof element === 'string';
    });
    
    console.log(result); // true
} catch (err) {
    console.error(`${err.name}: ${err.message}`);
}

exports.some = some;
