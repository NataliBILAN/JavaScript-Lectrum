/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение

const validateParams = function (...args) {
    for(const item of args){
        if(typeof item !== 'number') {
            throw new Error ('Not number!');
        }
    }
}

const postpone = function (start, end, delay) {
    validateParams(start, end, delay);

    const diff = Math.abs(start - end);
    let value = start;
    
    for (let i = 0; i <= diff; ++i) {
        setTimeout((value) => {
          console.log(value);
        }, i * delay, value);
        if (start < end) {
            value++;
        } else {
            value--;
        }
    }
}

postpone(1, 3, 1000);
// 1
// 2
// 3
postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;
