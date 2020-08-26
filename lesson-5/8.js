/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

const f = function (array) {
    if (!Array.isArray(array)) {
        throw new Error('It\'s not an array!');
    }

    if (array.length) {        
        console.log(Number(array.splice(0,1)));
        f(array);
    } else {
        throw new Error('Array is empty!');
    }
}

f([1, 2, 3]);
// 1
// 2
// 3

exports.f = f;
