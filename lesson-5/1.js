/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение

function f (num) {
    let result = num;

    if (typeof num !=='number') {
        throw new Error('It\'s not a number!');
    }

    for (let i = 1; i < 3; i++) {
        result *= num;
    }

    return result;
}

console.log(f('gf')); // 8

exports.f = f;
