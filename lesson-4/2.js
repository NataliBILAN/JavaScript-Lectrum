'use strict'
/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {};

Object.defineProperties(person, {
    rate: {
        value: null,
        writable: true,   
    },

    salary: {

        get () {
            if(this.rate !== null) {
                const today = new Date();
                const dayOfTheCurrentMonth = today.getDate();
                
                return this.rate*dayOfTheCurrentMonth;
            }

            return 0;  
        }
    }
})

// Решение
console.log(person);

person.rate = 30;
// delete person.rate;


// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
person.salary;

// delete person.salary;

exports.person = person;
