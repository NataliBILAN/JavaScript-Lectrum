/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3];

// Решение

const checkArray = function (array) {
    if (!Array.isArray(array)) {
        throw new Error ('It\'s not an array!');
    }
}

const checkFunction = function (func) {
    if (typeof func !== 'function') {
        throw new Error ('It\'s not a function!');
    }
}

const forEach = function (ar,cb) {
    checkArray(ar);
    checkFunction(cb);

    for(let i = 0; i < ar.length; i++) {
        cb(ar[i]);
    }
}

const result = forEach(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);
});

console.log(result); // undefined

exports.forEach = forEach;
