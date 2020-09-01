/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

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

const filter = function (ar, cb) {
    checkArray(ar);
    checkFunction(cb);

    const foundElements = [];

    for(let i = 0; i < ar.length; i++) {
        if (cb(ar[i], i, ar)) {
            foundElements.push(ar[i]);
        }        
    }

    return foundElements;

}

const filteredArray = filter(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return element === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
