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
    if (typeof num !=='number') {
        throw new Error('It\'s not a number!');
    }

    const result = Math.pow(num, 3);

    return result;
}

console.log(f(2)); // 8

exports.f = f;
