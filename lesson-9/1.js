/**
 * Задача 1.
 *
 * Создайте функцию shallowMerge.
 * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
 * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
 * Свойства необходимо копировать лишь на один уровень каждого их объектов.
 *
 * Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
 *
 * Условия:
 * - Встроенный метод Object.create() использовать запрещено;
 * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
 * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
 */

// Решение

const checkArgs = function (obj1, obj2) {
    if (typeof obj1 !== 'object' && Array.isArray(obj1)) {
        throw new Error ('It\'s not an object!');
    }
}

const shallowMerge = function (obj1, obj2) {
    checkArgs(obj1, obj2);

    const mergedObj = {};
    const ownPropsOfObj1 = Object.getOwnPropertyNames(obj1);
    const ownPropsOfObj2 = Object.getOwnPropertyNames(obj2);
       
    for (prop of ownPropsOfObj1) {
    const desc = Object.getOwnPropertyDescriptor(obj1, prop);

    Object.defineProperties(mergedObj,{[prop]:desc});
    }   
        
    for (prop of ownPropsOfObj2) {
    const desc = Object.getOwnPropertyDescriptor(obj2, prop);

    Object.defineProperties(mergedObj,{[prop]:desc});
    }
    
    return mergedObj;
}

const user = { firstName: 'Marcus', lastName: 'Kronenberg' };
const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

Object.defineProperty(user, 'firstName', { writable: false });
Object.defineProperty(userData, 'job', { configurable: false });

const result = shallowMerge(user, userData);

console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false

exports.shallowMerge = shallowMerge;
