/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3, 4, 5, 6];

// Решение
const checkArray = function (ar) {
    if (!Array.isArray(ar)) {
        throw new Error ('It\'s not an array!');
    }
}

const checkFunction = function (func) {
    if (typeof func !== 'function') {
        throw new Error ('It\'s not a function!');
    }
}

const every = function (ar, cb) {
    checkArray(ar);
    checkFunction(cb);

    for (let i = 0; i < ar.length; i++) {
        if (!cb(ar[i], i, ar)) {            
            return false;
        }
    }

    return true;
}

const result = every(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'number';
});

console.log(result); // true

exports.every = every;
