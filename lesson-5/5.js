/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 * 
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

const isPositive = function (num) {
    if (typeof num !== 'number') {
        throw new Error('It should be a number!')
    }

    if (num > 0) {
        return true;
    } else if (num < 0) {
        return false;
    }
    
    return 0;    
}

isPositive(-3); // false
isPositive(3); // true

exports.isPositive = isPositive;
