/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение
const reduce = function (arr, cb, initial) {
    "use strict";

    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }

    if (typeof cb !== 'function') {
        throw new Error('Second argument must be callback function');
    }

    let acc = initial || arr[0];
    
    for (const key of Object.keys(arr)) {
        const i = Number(key);

        if (!Number.isInteger(i) || i < 0) {
            continue;
        }

        if (i === 0 && !initial) {
            continue;
        }

        acc = cb(acc, arr[i], i, arr);
    }

    return acc;
};

try {
    const result = reduce(
        array,
        (accumulator, element, index, arrayRef) => {
            console.log(`${index}:`, accumulator, element, arrayRef);
    
            return accumulator + element;
        },
        INITIAL_ACCUMULATOR,
    );
    
    console.log(result); // 21
} catch (err) {
    console.error(`${err.name}: ${err.message}`);
}

exports.reduce = reduce;
