/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение
const filter = function (arr, cb) {
    "use strict";
    
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }

    if (typeof cb !== 'function') {
        throw new Error('Second argument must be callback function');
    }

    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        const isValid = cb(arr[i], i, arr);

        if (isValid) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
};

try {
    const filteredArray = filter(array, (element, index, arrayRef) => {
        console.log(`${index}:`, element, arrayRef);
    
        return element === 'Добрый вечер!';
    });
    
    console.log(filteredArray); // ['Добрый вечер!']
} catch (err) {
    console.error(`${err.name}: ${err.message}`);
}

exports.filter = filter;
