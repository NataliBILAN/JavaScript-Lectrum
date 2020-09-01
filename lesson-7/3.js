/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

const checkTypeOfFirstArgument = function (value) {
    if (typeof value !== 'number'
        && typeof value !== 'string'
        && typeof value !== 'object'
        && !Array.isArray(value)) {
            throw new Error('Not correct first argument!');
    }
}

const checkNumber = function (num) {
    if (typeof num !== 'number') {
        throw new Error('Second argument should be a number!');
    }
}

const createArray = function (value, length) {
    checkTypeOfFirstArgument(value);
    checkNumber(length);

    const newArray = [];

    for (let i = 0; i < length; i++) {
        newArray.push(value);
    }

    return newArray;
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
