/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3, 4, 5, 6];

// Решение
const every = function (arr, cb) {
    "use strict";
    
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }

    if (typeof cb !== 'function') {
        throw new Error('Second argument must be callback function');
    }

    let isValid = false;

    for (let i = 0; i < arr.length; i++) {
        isValid = Boolean(cb(arr[i], i, arr));

        if (!isValid) {
            return isValid;
        }
    }

    return isValid;
};

try {
    const result = every(array, (element, index, arrayRef) => {
        console.log(`${index}:`, element, arrayRef);
    
        return typeof element === 'number';
    });
    
    console.log(result); // true
} catch (err) {
    console.error(`${err.name}: ${err.message}`);
}

exports.every = every;
