/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 * 
 * Заметки:
 * - В решении вам понадобится использовать цикл с перебором массива.
 */

// Решение
const getDivisors = function (num) {
    if (typeof num !== 'number') {
        throw new Error('It should be a number!')
    }

    if (num < 1) {
        throw new Error('It should be a number more than 1!')
    }

    const arrayOfDivisors = [];
    
    for(let i=1; i <= num; i++) {
        if (num % i === 0) {
            arrayOfDivisors.push(i); 
        }
    } 

    return arrayOfDivisors;
}

getDivisors(12); // [1, 2, 3, 4, 6, 12]

exports.getDivisors = getDivisors;
