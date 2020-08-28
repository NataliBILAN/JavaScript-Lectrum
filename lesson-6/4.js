/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 * 
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

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

const some = function (ar, cb) {
    checkArray(ar);
    checkFunction(cb);

    for (let i = 0; i < ar.length; i++) {
        if (cb(ar[i])) {            
            return true;
        }
    }

    return false;
}

const result = some(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'string';
});

console.log(result); // true

exports.some = some;
