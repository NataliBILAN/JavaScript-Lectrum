/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

const isEven = function (num) {
    if (typeof num !== 'number') {
        throw new Error('It should be a number!')
    }

    if (num % 2 === 0 && num !== 0) {
        return true;
    } else if (num % 2 !== 0) {
        return false;
    }

    return 0;
}

isEven(3); // false
isEven(4); // true

exports.isEven = isEven;
