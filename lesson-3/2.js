/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку example. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение

function checkSpam (source, example) {
    if (typeof source !== 'string' && typeof example !== 'string') {
        throw new Error('it\'s not a string!');
    } 
    
    const sourceInLowCase = source.toLowerCase();
    const exampleInLowCase = example.toLowerCase();

    return sourceInLowCase.includes(exampleInLowCase); 
}

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;
